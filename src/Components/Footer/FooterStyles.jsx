import styled from "styled-components";

export const FooterContainer = styled.footer`
    background: #CC3874;
  padding: 1%;
  .box-footer{
    display: flex;
    justify-content: center;
    gap: 5%;
    .list-footer{
      display: flex;
      flex-direction: column;
      a{
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.6);
      }
    }
    h3{
      font-family: 'Oswald';
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      color: #FFFFFF;
    }
    .box1{
      max-width: 261px;
      h2{
        font-family: 'VAL';
        font-style: normal;
        font-weight: 900;
        font-size: 2rem;
        line-height: 30px;
        color: #DD722E;
        margin: 1rem 1rem 1rem 0rem;
      }
      .text{
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.6);
      }
      .derechos{
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 400;
        font-size: 0.8rem;
        line-height: 12px;
        color: rgba(255, 255, 255, 0.6);
        margin: 1rem 1rem 1rem 0rem;
      }
    }
    .box2{

    }
    .box3{
      max-width: 280px;

    }
    .box4{

    }
    .box5{

    }
  }

`