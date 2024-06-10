import { MdKeyboardArrowDown } from "react-icons/md";
import {
  MainHeaderTab,
  MainHeaderTabBox,
  MainHeaderTitle,
  MainHeaderTitleText,
  BoxDesign1,
  PanControlBox,
  PanControlOptions,
  BoxDesignText1,
  GroupPanBox,
  GroupPan,
} from "./styles";
import { useState } from "react";
import { PiDotsThreeOutlineThin } from "react-icons/pi";
import ChoiceModal from "../Modal/ChoiceModal/ChoiceModal";
import useModal from "../../hooks/useModal";
import { GroupState, PanPlayState } from "../../types";
import { PanPlayImg } from "../Img/PanPlayImg";
import { HeaderIconBox, MainHeader, PanControlText } from "../../style/GlobalStyle";
import PanControlCard from "../PanControlCard/PanControlCard";
import PanControlButtonGroup from "../PanControlButton/PanControlButton";

export default function Home() {
  const [mainTabSelct, setMainTabSelect] = useState<string>("all");

  const panPlay: PanPlayState[] = [
    { id: 1, name: "pan 1", isPlaying: false },
    { id: 2, name: "pan 2", isPlaying: true },
  ];

  const groupsPan: GroupState[] = [
    {
      id: 1,
      groubName: "Group 1",
      playNum: "2",
      fans: [
        { id: 1, name: "pan 1", isPlaying: false },
        { id: 2, name: "pan 2", isPlaying: true },
        { id: 3, name: "pan 3", isPlaying: false },
        { id: 4, name: "pan 4", isPlaying: true },
        { id: 5, name: "pan 5", isPlaying: true },
        { id: 6, name: "pan 6", isPlaying: false },
      ],
    },
    {
      id: 2,
      groubName: "Group 2",
      playNum: "max",
      fans: [
        { id: 5, name: "pan 5", isPlaying: true },
        { id: 6, name: "pan 6", isPlaying: true },
        { id: 7, name: "pan 7", isPlaying: true },
        { id: 8, name: "pan 8", isPlaying: true },
        { id: 9, name: "pan 9", isPlaying: true },
      ],
    },
  ];

  const houseName = [
    "딸기 하우스",
    "수박 하우스",
    "귤 하우스",
    "감 하우스",
    "두리안 하우스",
  ];
  const choideModalControl = useModal();

  // const playPan = (pan) => {
  //   setPanPlay([...panPlay,{...pan ,}]);
  // };

  const renderPanControl = () => {
    return panPlay.map((v) => (
      <PanControlCard pan={v} width='49%' direction='column' />
    ));
  };

  const groupPan = () => {
    return groupsPan.map((v) => {
      const fansToShow = v.fans.slice(0, 4);
      const hasMoreThanFourFans = v.fans.length > 4;
      return (
        <BoxDesign1 key={v.id} $width={"100%"} $direction="column">
          <PanControlOptions>
            <PiDotsThreeOutlineThin size={22} />
          </PanControlOptions>
          <BoxDesignText1>
            <img src="./img/folder_ico.png" alt="" />
            <PanControlText>
              {v.groubName}
              <span>
                {v.playNum === "max"
                  ? "모든 팬이 작동중"
                  : `${v.playNum}개가 작동중`}
              </span>
            </PanControlText>
          </BoxDesignText1>
          <GroupPanBox $playNum={v.playNum}>
            {fansToShow.map((fan, index) => (
              <GroupPan
                key={fan.id}
                className={`
                  ${fan.isPlaying ? "on" : ""}
                  ${index === 3 && hasMoreThanFourFans ? "hasMmore" : ""}
                `}
                $pansNum={v.fans.length - 4}
              >
                <PanPlayImg playing={fan.isPlaying} />
              </GroupPan>
            ))}
          </GroupPanBox>
          <PanControlButtonGroup
            isPlaying={true}
            // onPlayPauseClick={() => playPan("pan3")}
          />
        </BoxDesign1>
      );
    });
  };

  return (
    <>
      <MainHeader>
        <MainHeaderTitle onClick={() => choideModalControl.openModal()}>
          <img src="./img/top_location_ico.png" alt="" />
          <MainHeaderTitleText>딸기 하우스</MainHeaderTitleText>
          <MdKeyboardArrowDown />
        </MainHeaderTitle>

        <HeaderIconBox>
          <img src="./img/top_noti_ico_off.png" alt="" />
          <img src="./img/top_mypage_ico.png" alt="" />
        </HeaderIconBox>
      </MainHeader>

      <MainHeaderTabBox>
        <MainHeaderTab
          onClick={() => setMainTabSelect("all")}
          className={`${mainTabSelct === "all" ? "on" : ""}`}
        >
          모든 장치
        </MainHeaderTab>
        <MainHeaderTab
          onClick={() => setMainTabSelect("single")}
          className={`${mainTabSelct === "single" ? "on" : ""}`}
        >
          단일 장치3
        </MainHeaderTab>
        <MainHeaderTab
          onClick={() => setMainTabSelect("groub")}
          className={`${mainTabSelct === "groub" ? "on" : ""}`}
        >
          그룹 2
        </MainHeaderTab>
      </MainHeaderTabBox>

      <PanControlBox>
        {renderPanControl()}
      </PanControlBox>
      {groupPan()}

      {choideModalControl.isOpen && (
        <ChoiceModal
          isModalOpen={choideModalControl.isOpen}
          houseName={houseName}
          onCLose={choideModalControl.closeModal}
        />
      )}
    </>
  );
}
