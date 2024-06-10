import styled from "styled-components";
import { ellipsisStyle } from "../../style/GlobalStyle";

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