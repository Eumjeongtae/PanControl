import styled from "styled-components";
import { center } from "../../style/GlobalStyle";

export const Card = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  max-width: 350px;
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
  padding-top: 95%; /* 1:1 비율을 유지합니다 */
  position: relative; /* 자식 요소의 위치를 조정할 수 있도록 합니다 */
  background: ${(props) =>
    props.$isplaying ? "rgba(62, 134, 242,0.1)" : "none"};
  background-size: contain;
  border-radius: 50%;
  margin : 0 auto;

  & > div {
    position: absolute; /* 부모 요소의 기준으로 위치를 조정합니다 */
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    width: 80%;
    height: 80%;
    border-radius: 50%;
    background: ${(props) =>
      props.$isplaying
        ? "radial-gradient(49.55% 46.4% at 64.4% 20.8%, #A7CAFF 0%, #3E86F2 100%)"
        : "radial-gradient(68.4% 68.4% at 68.8% 24.4%, #FFFFFF 0%, #EDEFF6 100%)"};
  }
`;
