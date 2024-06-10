import styled, { css } from "styled-components";
import { contentMarginBottom } from "../../style/GlobalStyle";

interface BoxDesign1Props {
  $width: string;
  $direction: string;
}

export const MainHeaderTitle = styled.h2`
  display: flex;
  align-items: center;
  /* color: var(--main-font-color); */
`;
export const MainHeaderTitleText = styled.span`
  position: relative;
  top: 1px;
  font-size: 1.2rem;
  margin: 0 5px;
`;

export const MainHeaderTabBox = styled.ul`
  display: flex;
  align-items: center;
  padding: 4% 0;
`;
export const MainHeaderTab = styled.li`
  opacity: 0.3;
  padding-right: 13px;
  cursor: pointer;
  &.on {
    opacity: 1;
  }
`;
export const PanControlBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 3%;
  ${contentMarginBottom};

  & > div {
    margin-bottom: 1%;
  }
`;
export const BoxDesign1 = styled.div<BoxDesign1Props>`
  position: relative;
  display: flex;
  flex-direction: ${(props) => props.$direction};
  padding: 6% 4% 7%;
  background: var(--background-gray5);
  box-sizing: border-box;
  width: ${(props) => props.$width};
  border-radius: 15px;
  ${contentMarginBottom};

  ${(props) =>
    props.$direction === "row"
      ? `
      justify-content : space-between ;
      align-items:center;
      `
      : `justify-content :flex-start;
      align-items:stretch;`};
  &.on {
    background: var(--backgound-blue);
  }
  &.row > div {
    width: 40%;
  }
`;
export const PanControlOptions = styled.p`
  /* display:flex; */
  /* justify-content:flex-end; */
  position: absolute;
  top: 3%;
  right: 10px;
`;
export const BoxDesignText1 = styled.div`
  display: flex;
  padding: 2% 0;
  margin-bottom: 10px;
  & > img {
    object-fit: contain;
  }
`;

// export const PanControlBtnBox = styled.div`
//     display: flex;
//     justify-content: space-between;

// `
export const GroupPanBox = styled.ul<{ $playNum: string }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  border: 1px solid var(--background-gray4);
  border-radius: 20px;
  padding: 4%;
  margin-bottom: 15px;

  ${(props) =>
    props.$playNum === "max" &&
    css`
      &::after {
        content: "그룹 내 모든 기기 작동중";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        background: radial-gradient(
          54.4% 62% at 82.58% 12.8%,
          #6aa5ff 0%,
          #3e86f2 100%
        );
        opacity: 0.8;
        border-radius: inherit;
        font-size: 0.9rem;
      }
    `}
`;
export const GroupPan = styled.li<{ $pansNum: number }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background-gray3);
  width: 21%;
  height: 16vw;
  max-height: 75px;
  border-radius: 10px;

  &.on {
    background: radial-gradient(
      54.4% 62% at 82.58% 12.8%,
      #6aa5ff 0%,
      #3e86f2 100%
    );
  }

  &.hasMmore::after {
    content: "${(props) => "+" + props.$pansNum}";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: inherit;
    font-size: 0.9rem;
  }
`;
