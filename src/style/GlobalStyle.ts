import styled, { css, keyframes } from "styled-components";

// 말줄임표 스타일을 변수로 정의
export const ellipsisStyle = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const center = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const contentMarginBottom = css`
  margin-bottom: 20px;
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOutDown = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
`;
// export const MainBody = styled.main`
//   position: relative;
//   /* padding : 0 4%; */
//   background-color: #fff;
// `;

// export const HomeBody = styled.main`
//   position: relative;
//   padding: 0 4%;
//   background-color: #fff;
// `;
export const MainContainer = styled.main`
  margin: 60px 0 90px;
  position: relative;
  padding: 0 4%;
  background-color: #fff;
`;

export const MainHeader = styled.header`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0 4%;
`;
export const PanControlBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PanControlBtn = styled.button`
  ${center}
  width : 48%;
  padding: 7px 0;
  border: 1px solid var(--background-gray4);
  border-radius: 20px;
  &.play {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

export const ModalBg = styled.div<{ isvisible: string }>`
  z-index: 500;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding-bottom: 7%;
  background: rgba(0, 0, 0, 0.7);
  overflow: hidden;
  opacity: ${({ isvisible }) => (isvisible === "true" ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

export const ModalContainer = styled.div<{ isvisible: string }>`
  background-color: #ffffff;
  width: 93%;
  padding: 4% 5%;
  box-sizing: border-box;
  border-radius: 10px;
  position: relative;
  animation: ${({ isvisible }) =>
      isvisible === "true" ? fadeInUp : fadeOutDown}
    0.3s ease;

  &::before {
    content: "";
    display: block;
    width: 7%;
    height: 4px;
    margin: 0 auto 12px;
    background-color: var(--background-gray3);
  }
`;

export const Header1 = styled.header`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  justify-content: space-between;
  ${center}
  height: 60px;
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0 4%;
  & > svg {
    position: absolute;
    left: 3%;
    top: 50%;
    transform: translateY(-50%);
  }
  & > div {
    position: absolute;
    right: 3%;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Header1Name = styled.h2`
  position: relative;
  font-size: 1.2rem;
  width: 90vw;
  text-align: center;
  & > span {
    position: absolute;
    bottom: -20px;
    left: 50%;
    text-align: center;
    transform: translateX(-50%);
    color: #ff4566;
    font-size: 0.7rem;
    &::before {
      content: "";
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #ff4566;
      margin-right: 5px;
    }
  }
`;
export const HeaderIconBox = styled.div`
  display: flex;
  :last-child {
    margin-left: 10px;
  }
`;

export const ImageBox = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: contain;
`;
export const PanControlText = styled.p`
  width: 70%;
  padding: 0 4%;
  ${ellipsisStyle};
  & > span {
    display: block;
    line-height: 20px;
    font-size: 0.8rem;
    color: var(--sub-font-color2);
    font-weight: 400;
  }
  &.on {
    color: #fff;
    & > span {
      color: #fff;
    }
  }
`;
