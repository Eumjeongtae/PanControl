import { IoPlayOutline } from "react-icons/io5";
import { GrPowerCycle } from "react-icons/gr";
import { CiPause1 } from "react-icons/ci";
import { PanControlBtnBox, PanControlBtn } from '../../style/GlobalStyle';

interface PanControlButtonGroupProps {
  isPlaying: boolean;
  onPlayPauseClick?: () => void;
  additionalButton?: React.ReactNode;
}

export default function PanControlButtonGroup1({ isPlaying, onPlayPauseClick }: PanControlButtonGroupProps) {
  return (
    <PanControlBtnBox>
      <PanControlBtn className="play" onClick={onPlayPauseClick}>
        {isPlaying ? <CiPause1 color='white' /> : <IoPlayOutline />}
      </PanControlBtn>
      <PanControlBtn>
        <GrPowerCycle color={isPlaying ? 'white' : ''} />
      </PanControlBtn>
    </PanControlBtnBox>
  );
}


