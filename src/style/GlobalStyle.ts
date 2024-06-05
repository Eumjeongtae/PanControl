import styled, { css } from 'styled-components';

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