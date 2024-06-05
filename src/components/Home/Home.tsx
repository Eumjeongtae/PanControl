import { MdKeyboardArrowDown } from "react-icons/md";
import { MainHeader, MainHeaderIconBox, MainHeaderTab, MainHeaderTabBox, MainHeaderTitle, MainHeaderTitleText, BoxDesign1, PanControlBox, PanControlOptions, PanControlText, BoxDesignText1, GroupPanBox, GroupPan } from './styles';
import { useState } from "react";
import { PiDotsThreeOutlineThin } from "react-icons/pi";
import PanControlButtonGroup1 from "../PanControlButton/PanControlButton1";
import PanControlButtonGroup2 from "../PanControlButton/PanControlButton2";

interface PanPlayState {
  pan1: boolean;
  pan2: boolean;
  pan3: boolean;
  pan4: boolean;
}

export default function Home() {
  const [mainTabSelct, setMainTabSelect] = useState<string>('all');
  const [panPlay, setPanPlay] = useState<PanPlayState>({ pan1: false, pan2: true, pan3: false , pan4: true });

  const playPan = (key: keyof PanPlayState) => {
    setPanPlay({ ...panPlay, [key]: !panPlay[key] });
  }

  const renderPanControl = (key: keyof PanPlayState) => {
    return (
      <BoxDesign1 className={`${panPlay[key] ? 'on' : ''}`} $width={'49%'} $direction='column'>
        <PanControlOptions>
          <PiDotsThreeOutlineThin size={22} color={panPlay[key] ? 'white' : ''} />
        </PanControlOptions>

        <BoxDesignText1>
          {panPlay[key] ?
            <img src="./img/fan_ico_on.png" alt="" />
            :
            <img src="./img/fan_ico_off.png" alt="" />
          }
          <PanControlText className={`${panPlay[key] ? 'on' : ''}`}>
            글자수 제한 글자수 제한 글자수 제한
            <span>{panPlay[key] ? '작동중' : '멈춤'}</span>
          </PanControlText>
        </BoxDesignText1>

        <PanControlButtonGroup1
          isPlaying={panPlay[key]}
          onPlayPauseClick={() => playPan(key)}
        />
      </BoxDesign1>
    );
  };

  return (
    <>
      <MainHeader>
        <MainHeaderTitle>
          <img src="./img/top_location_ico.png" alt="" />
          <MainHeaderTitleText>딸기 하우스</MainHeaderTitleText>
          <MdKeyboardArrowDown />
        </MainHeaderTitle>

        <MainHeaderIconBox>
          <img src="./img/top_noti_ico_off.png" alt="" />
          <img src="./img/top_mypage_ico.png" alt="" />
        </MainHeaderIconBox>
      </MainHeader>

      <MainHeaderTabBox>
        <MainHeaderTab onClick={() => setMainTabSelect('all')} className={`${mainTabSelct === 'all' ? 'on' : ''}`}>
          모든 장치
        </MainHeaderTab>
        <MainHeaderTab onClick={() => setMainTabSelect('single')} className={`${mainTabSelct === 'single' ? 'on' : ''}`}>
          단일 장치3
        </MainHeaderTab>
        <MainHeaderTab onClick={() => setMainTabSelect('groub')} className={`${mainTabSelct === 'groub' ? 'on' : ''}`}>
          그룹 2
        </MainHeaderTab>
      </MainHeaderTabBox>

      <PanControlBox>
        {renderPanControl('pan1')}
        {renderPanControl('pan2')}
      </PanControlBox>

      <BoxDesign1 $width={'100%'} $direction='column'>
        <PanControlOptions>
          <PiDotsThreeOutlineThin size={22} />
        </PanControlOptions>

        <BoxDesignText1>
          <img src="./img/folder_ico.png" alt="" />
          <PanControlText>
            그룹 이름이 들어갑니다.
            <span>2개가 작동중</span>
          </PanControlText>
        </BoxDesignText1>
        <GroupPanBox>
          <GroupPan>
            <img src="./img/fan_ico_off.png" alt="" />
          </GroupPan>
          <GroupPan className="on">  <img src="./img/fan_ico_on.png" alt="" /></GroupPan>
          <GroupPan>
            <img src="./img/fan_ico_off.png" alt="" />
          </GroupPan>
          <GroupPan> <img src="./img/fan_ico_off.png" alt="" /></GroupPan>
        </GroupPanBox>
        <PanControlButtonGroup2
          isPlaying={panPlay['pan3']}
          onPlayPauseClick={() => playPan('pan3')}
        />
      </BoxDesign1>
      {/* /////////  모든 팬이 작동중일떄 */}
      <BoxDesign1 $width={'100%'} $direction='column'>
        <PanControlOptions>
          <PiDotsThreeOutlineThin size={22} />
        </PanControlOptions>

        <BoxDesignText1>
          <img src="./img/folder_ico.png" alt="" />
          <PanControlText>
            그룹 이름이 들어갑니다.
            <span>2개가 작동중</span>
          </PanControlText>
        </BoxDesignText1>

        <GroupPanBox className="allPanPlay">
          <GroupPan>
            <img src="./img/fan_ico_off.png" alt="" />
          </GroupPan>
          <GroupPan className="on">  <img src="./img/fan_ico_on.png" alt="" /></GroupPan>
          <GroupPan>
            <img src="./img/fan_ico_off.png" alt="" />
          </GroupPan>
          <GroupPan> <img src="./img/fan_ico_off.png" alt="" /></GroupPan>
        </GroupPanBox>

        <PanControlButtonGroup2
          isPlaying={panPlay['pan4']}
          onPlayPauseClick={() => playPan('pan4')}
        />
      </BoxDesign1>
    </>
  );
}
