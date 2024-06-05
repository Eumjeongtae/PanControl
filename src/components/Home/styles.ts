import styled from 'styled-components';
import { center, contentMarginBottom, ellipsisStyle } from '../../style/GlobalStyle';


interface BoxDesign1Props {
    $width: string;
    $direction: string;
}
export const HomeBody = styled.main`
    position:relative;
    padding : 0 4%;
    background-color:#fff;
  
    `
export const MainHeader = styled.div`
    position:fixed;
    z-index:10;
    top: 0;
    left:0;
    display:flex;
    justify-content:space-between;
    align-items : center;
    height: 60px;  
    width: 100%;
    background-color:#fff;
    box-sizing:border-box;
    padding : 0 4%;

    `

export const MainHeaderTitle = styled.h2`
    display:flex;
    align-items : center;
    /* color: var(--main-font-color); */
    `
export const MainHeaderTitleText = styled.span`
    position:relative;
    top:1px;
    font-size:1.2rem;
    margin: 0 5px;
    `
export const MainHeaderIconBox = styled.div`
    display: flex;
    :last-child{
        margin-left:10px;
    }
    `
export const MainHeaderTabBox = styled.ul`
    display:flex;
    align-items : center;
    padding : 4% 0;

    `
export const MainHeaderTab = styled.li`
    opacity:.3;
    padding-right : 13px;
    cursor: pointer;
    &.on{
        opacity:1;
    }
`
export const PanControlBox = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top : 3%;
`
export const BoxDesign1 = styled.div<BoxDesign1Props>`
    display: flex;
    flex-direction: ${(props) => props.$direction};
    padding: 3% 4% 7%;
    background: var(--background-gray5);
    box-sizing: border-box;
    width: ${(props) => props.$width};
    border-radius: 15px;
    ${contentMarginBottom}
    &.on {
        background: var(--backgound-blue);
    }
`;
export const PanControlOptions = styled.p`
    display:flex;
    justify-content:flex-end;
`
export const BoxDesignText1 = styled.div`
    display:flex;
    padding :  2% 0; 
    margin-bottom:10px;
    & > img{
        object-fit:contain;
    }

`
export const PanControlText = styled.p`
    width: 70%;
    padding: 0 4%;
    ${ellipsisStyle};
    & > span{
        display : block;
        line-height : 20px;
        font-size:0.8rem;
        color : var(--sub-font-color2);
        font-weight:400;
    }
    &.on{
        color: #fff;
        & > span{
            color: #fff;
        }

    }

`
// export const PanControlBtnBox = styled.div`
//     display: flex;
//     justify-content: space-between;

// `

export const GroupPanBox = styled.ul`
    position:relative;
    display: flex;
    justify-content: space-between;
    border : 1px solid var(--background-gray4);
    border-radius : 20px;
    padding : 4%;
    margin-bottom:15px;
    :last-child::after{
        content:'+4';
        position:absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        ${center}
        color:#fff;
        background-color:rgba(0,0,0,0.5);
        border-radius :inherit;
        font-size:0.9rem;
    } 
    &.allPanPlay:after{
        content:'그룹 내 모든 기기 작동중';
        position:absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        ${center}
        color:#fff;
        background: var(--backgound-blue) ;
        opacity:.8;
        border-radius :inherit;
        font-size:0.9rem;
    } 

`
export const GroupPan = styled.li`
    position:relative;
    ${center}
    background-color : var(--background-gray3);
    width: 21%;
    height: 16vw;
    max-height: 75px;
    border-radius :10px;
    &.on {
        background: var(--backgound-blue);
    }

`