import styled, { css, keyframes } from 'styled-components';

// 말줄임표 스타일을 변수로 정의
export const ellipsisStyle = css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;


export const center = css`
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const contentMarginBottom = css`
    margin-bottom:20px;
`

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
export const MainBody = styled.main`
    position:relative;
    /* padding : 0 4%; */
    background-color:#fff;
  
    `

export const PanControlBtnBox = styled.div`
display: flex;
justify-content: space-between;

`

export const PanControlBtn = styled.button`
    ${center}
    width : 48%;
    padding : 7px 0;
    border : 1px solid var(--background-gray4);
    border-radius : 20px;
    &.play{
        background-color:rgba(255,255,255,.4);
    }
`

export const ModalBg = styled.div<{ isVisible: boolean }>`
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
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transition: opacity 0.3s ease;
`;

export const ModalContainer = styled.div<{ isVisible: boolean }>`
    background-color: #ffffff;
    width: 93%;
    padding: 4% 5%;
    box-sizing: border-box;
    border-radius: 10px;
    position: relative;
    animation: ${({ isVisible }) => (isVisible ? fadeInUp : fadeOutDown)} 0.3s ease;

    &::before {
        content: '';
        display: block;
        width: 7%;
        height: 4px;
        margin: 0 auto 12px;
        background-color: var(--background-gray3);
    }
`;