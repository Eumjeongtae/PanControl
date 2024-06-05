import { IoPlayOutline } from "react-icons/io5";
import { GrPowerCycle } from "react-icons/gr";
import { CiPause1 } from "react-icons/ci";
import { PanControlBtnBox, PanControlBtn } from '../../style/GlobalStyle';

interface PanControlButtonGroupProps {
  isPlaying: boolean;
  onPlayPauseClick?: () => void;
  additionalButton?: React.ReactNode;
}

export default function PanControlButtonGroup2({ isPlaying, onPlayPauseClick }: PanControlButtonGroupProps) {
  return (
    <PanControlBtnBox>
      <PanControlBtn className="play" onClick={onPlayPauseClick}>
        {isPlaying ? <CiPause1  /> : <IoPlayOutline />}
      </PanControlBtn>
      <PanControlBtn>
        <GrPowerCycle  />
      </PanControlBtn>
    </PanControlBtnBox>
  );
}


