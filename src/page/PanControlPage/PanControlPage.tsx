import {
  Header1,
  Header1Name,
  HeaderIconBox,
  ImageBox,
  MainContainer,
  PanControlText,
} from "../../style/GlobalStyle";
import {
  Card,
  ImageContainer,
  PanplayInfo,
  PlayButton,
  PlayButtonText,
  Slider,
  SliderContainer,
  WindSpeed,
  WindSpeedCard,
  WindSpeedCardState,
  WindSpeedCardTitle,
} from "./style";
import { CiPause1 } from "react-icons/ci";
import { FiArrowLeft } from "react-icons/fi";
import { IoPlayOutline } from "react-icons/io5";
import { GrPowerCycle } from "react-icons/gr";
import { PiFan } from "react-icons/pi";
import { useState } from "react";

export default function PanControlPage() {
  const [panPlay, setPanPlay] = useState({
    id: 1,
    name: "pan 1",
    isPlaying: true,
    panState: "rotate",
    speed: 3,
  });
  const windSpeeds = ["미풍", "약풍", "강풍", "터보"];
  const playButtonFn = () => {
    return panPlay.isPlaying ? (
      <PlayButtonText $isplaying={panPlay.isPlaying}>
        <CiPause1 color="white" size={32} />
        현재 상태
        <span>작동중</span>
      </PlayButtonText>
    ) : (
      <PlayButtonText $isplaying={panPlay.isPlaying}>
        <IoPlayOutline size={32} />
        현재 상태
        <span>멈춰있음</span>
      </PlayButtonText>
    );
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPanPlay({ ...panPlay, speed: Number(event.target.value) });
  };

  return (
    <>
      <Header1>
        <FiArrowLeft size={20} />

        <Header1Name>
          {panPlay.name}
          <span>연결 안됨</span>
        </Header1Name>

        <HeaderIconBox>
          <img src="./img/panControl/bookmark.png" alt="" />
          <img src="./img/panControl/setting_ico.png" alt="" />
        </HeaderIconBox>
      </Header1>

      <MainContainer>
        <Card>
          <ImageContainer>
            <ImageBox src="./img/model_img.png" />
          </ImageContainer>
          <PanControlText>
            {panPlay.name}
            <span>2024.04.19에 등록</span>
          </PanControlText>
        </Card>

        <PlayButton $isplaying={panPlay.isPlaying}>
          <div>{playButtonFn()}</div>
        </PlayButton>

        <PanplayInfo>
          <p>
            펜 속도
            <b>1,500</b>
            <span>rpm</span>
          </p>
          <p></p>
          <p>
            총 작동 시간
            <b>1시간 30분</b>
          </p>
        </PanplayInfo>

        <WindSpeedCard>
          <WindSpeedCardTitle>
            <GrPowerCycle color="#636568" />
            방향 회전
          </WindSpeedCardTitle>
          <WindSpeedCardState $panState={panPlay.panState}>
            {panPlay.panState === "rotate" ? "작동 중" : "멈품"}
          </WindSpeedCardState>
        </WindSpeedCard>

        <WindSpeedCard>
          <WindSpeedCardTitle>
            <PiFan color="#636568" />
            풍속 설정
          </WindSpeedCardTitle>
          <WindSpeedCardState $panState={""}>
            {windSpeeds[panPlay.speed]}
          </WindSpeedCardState>

          <SliderContainer>
            <Slider
              type="range"
              min="0"
              max="3"
              value={panPlay.speed}
              onChange={handleChange}
            />
          </SliderContainer>
          <WindSpeed>
            {windSpeeds.map((windSpeed, index) => (
              <span key={index}>{windSpeed}</span>
            ))}
          </WindSpeed>
        </WindSpeedCard>
      </MainContainer>
    </>
  );
}
