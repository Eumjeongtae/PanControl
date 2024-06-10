import { ImageBox } from "../../style/GlobalStyle";

interface PlayingImgStatus {
  playing: boolean;
}

export const PanPlayImg = ({ playing }: PlayingImgStatus) => {
  return playing ? (
    <ImageBox src="./img/fan_ico_on.png" />
  ) : (
    <ImageBox src="./img/fan_ico_off.png" />
  );
};
