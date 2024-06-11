import styled from "styled-components";
import { center, contentMarginBottom } from "../../style/GlobalStyle";

export const Card = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 12px;
  border: 1px solid #edeff6;
  padding: 5% 4%;
  margin-top: 90px;
`;

export const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 5px;
  background-color: rgba(50, 50, 50, 0.1);
  ${center}
  & > img {
    width: 100%;
    object-fit: cover;
  }
`;

export const PlayButton = styled.div<{ $isplaying: boolean }>`
  width: 95%;
  padding-top: 95%;
  position: relative;
  background: ${(props) =>
    props.$isplaying ? "rgba(62, 134, 242,0.1)" : "none"};
  background-size: contain;
  border-radius: 50%;
  margin: 0 auto;
  ${contentMarginBottom}
  & > div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    border-radius: 50%;
    ${center}
    background: ${(props) =>
      props.$isplaying
        ? "radial-gradient(49.55% 46.4% at 64.4% 20.8%, #A7CAFF 0%, #3E86F2 100%)"
        : "radial-gradient(68.4% 68.4% at 68.8% 24.4%, #FFFFFF 0%, #EDEFF6 100%)"};
    & > svg {
    }
  }
`;
export const PlayButtonText = styled.p<{ $isplaying: boolean }>`
  position: relative;
  width: 100%;
  height: 10%;
  text-align: center;
  color: ${(props) =>
    props.$isplaying ? "rgba(255,255,255,0.6);" : "rgba(153, 156, 159, 0.6);"};
  font-size: 0.7rem;
  ${contentMarginBottom}
  & > svg {
    margin: 0 auto 12%;
  }
  & > span {
    display: block;
    margin-top: 10px;
    font-size: 1rem;
    color: ${(props) =>
      props.$isplaying ? "rgba(255,255,255,1);" : "rgba(153, 156, 159, 1);"};
  }
`;
export const PanplayInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${contentMarginBottom}
  & > p {
    width: 40%;
    text-align: center;
    color: rgba(153, 156, 159, 0.6);
    font-size: 0.7rem;
    &:nth-child(2) {
      height: 20px;
      width: 1px;
      background-color: #edeff6;
    }
    & > b {
      display: block;
      font-size: 1.1rem;
      font-weight: bold;
      padding: 10px 0 7px;
      color: #000;
    }
    & > span {
      font-size: 0.8rem;
      color: #000;
    }
  }
`;

export const WindSpeedCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: white;
  border-radius: 12px;
  border: 1px solid #edeff6;
  padding: 5% 4%;
  margin-bottom: 40px;
`;
export const WindSpeedCardTitle = styled.p`
  display: flex;
  color: rgba(99, 101, 104, 0.7);
  & > svg {
    margin-right: 8px;
  }
`;
export const WindSpeedCardState = styled.p<{ $panState: string }>`
  color: ${(props) => (props.$panState === "rotate" ? "#3E86F2;" : "##131314")};
  font-size: 1.1rem;
`;

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

export const Slider = styled.input`
  width: 100%;
  height: 10px;
  background: #e1e3e9;
  border-radius: 4px;
  outline: none;
  opacity: 0.7;
  /* transition: opacity 0.2s; */
  margin: 0 2px;

  /* &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #3e86f2;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #3E86F2;
    border-radius: 50%;
    cursor: pointer;
  } */
`;

export const WindSpeed = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
  color: #999c9f;
  font-size: 0.7rem;
  opacity: 0.7;
`;
