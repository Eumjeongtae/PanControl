import styled from 'styled-components';

export const BottomButtonBox = styled.div`
    position:fixed;
    z-index : 100;
    bottom : 0;
    left : 0;
    display:flex;
    align-items:center;
    justify-content:space-between;
    width: 100%;
    height: 80px;
    background-color : #EDEFF6; 
    padding:0 4%;
    box-sizing:border-box;

  `
  export const BottomButtons = styled.button`
    width:23%;
    img{
      margin : 0 auto;
    }
    span{
      display : block;
      color:#B0B2B9;
      font-size:10px;
      margin-top: 10px;
      &.on{
        color : var(--main-font-color);
      }
    }
  `
