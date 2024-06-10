import { FiArrowLeft } from "react-icons/fi";

import {
  Header1,
  Header1Name,
  HeaderIconBox,
  ImageBox,
  MainContainer,
  PanControlText,
} from "../../style/GlobalStyle";
import { Card, ImageContainer, PlayButton } from "./style";

export default function PanControlPage() {
  const panPlay = { id: 1, name: "pan 1", isPlaying: true };

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
          <div></div>
        </PlayButton>
      </MainContainer>
    </>
  );
}
