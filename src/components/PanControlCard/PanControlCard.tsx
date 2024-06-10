import React from "react";
import { PiDotsThreeOutlineThin } from "react-icons/pi";
import { PanPlayImg } from "../Img/PanPlayImg";
import { BoxDesign1 } from "../Home/styles";
import { BoxDesignText1, PanControlOptions, PanControlText } from "./styles";
import { PanControlBtn, PanControlBtnBox } from "../../style/GlobalStyle";
import { CiPause1 } from "react-icons/ci";
import { IoPlayOutline } from "react-icons/io5";
import { GrPowerCycle } from "react-icons/gr";
import { PanPlayState } from "../../types";

interface PanControlProps {
  // panPlay: PanPlayState[];
  pan:PanPlayState;
  width: string;
  direction: string;
}

const PanControlCard: React.FC<PanControlProps> = ({
  pan,
  width,
  direction,
}) => {
  return (
    <>
        <BoxDesign1
          className={`${pan.isPlaying ? "on" : ""} ${direction}`}
          $width={width}
          $direction={direction}
          key={pan.id}
        >
          <PanControlOptions>
            <PiDotsThreeOutlineThin
              size={22}
              color={pan.isPlaying ? "white" : ""}
            />
          </PanControlOptions>

          <BoxDesignText1>
            <PanPlayImg playing={pan.isPlaying} />
            <PanControlText className={`${pan.isPlaying ? "on" : ""}`}>
              {pan.name}
              <span>{pan.isPlaying ? "작동중" : "멈춤"}</span>
            </PanControlText>
          </BoxDesignText1>

          {/* <PanControlButtonGroup1 isPlaying={v.isPlaying} /> */}

          <PanControlBtnBox>
            <PanControlBtn className="play" >
              {pan.isPlaying ? <CiPause1 color="white" /> : <IoPlayOutline />}
            </PanControlBtn>
            <PanControlBtn>
              <GrPowerCycle color={pan.isPlaying ? "white" : ""} />
            </PanControlBtn>
          </PanControlBtnBox>
        </BoxDesign1>
    </>
  );
};

export default PanControlCard;
