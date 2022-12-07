import styled from "styled-components";

export const BodyContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  padding-top: 20%;
  max-height: 900px;
  @media(min-width: 1850px){
    max-width: 2000px;
    max-height: 1200px;
  }
  @media(max-width: 960px){
    padding-top: 80%;
  }
  .box-home{
    box-sizing: border-box;
    width: 100%;
    display: flex;
    max-width: 1800px;
    justify-content: center;
    gap: 5%;
    @media(min-width: 1850px){
      max-width: 2000px;
      max-height: 1200px;
    }
    @media(max-width: 1300px) {
      .box1-img {
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
    @media(max-width: 960px) {
      flex-direction: column;
      align-items: center;
      gap: 0%;
      .box1-img {
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
    .box1-img{
      display: flex;
      justify-content: center;
      box-sizing: border-box;
      width: 50%;
      img{
      }
    }
    .text1{
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 30%;
      padding-top: 4%;
      box-sizing: border-box;
      @media(max-width: 960px) {
        width: 100%;
        padding-bottom: 60%;
      }
      
      h1{
        font-family: 'VAL';
        font-style: normal;
        font-weight: 900;
        font-size: 7.8rem;
        color: #DD722E;
        margin: 0px;
        -webkit-text-stroke: 2px #FFFFFF;
        @media(min-width: 1850px){
          font-size: 9rem;
        }
        @media(max-width: 450px) {
          font-size: 5rem;
        }

      }
      h2{
        margin: 0px;
        font-family: 'Bebas Neue';
        font-style: normal;
        font-weight: 400;
        font-size: 4rem;
        color: #000000;
        @media(min-width: 1850px){
          font-size: 5.5em;
        }
      }
      h4{

      }
      a{
        text-decoration: none;
        padding: 0.2em 0.1em 0.2em 0.1em;
        font-family: 'Bebas Neue';
        font-style: normal;
        font-weight: 400;
        font-size: 3rem;
        color: #000000;
        margin: 0px;
        border-bottom: 0.1em solid black;
        border-top: 0.1em solid black;
        transition: all 0.3s ease;
        @media(min-width: 1850px){
          font-size: 3.5rem;
          padding: 0.1em 0.1em 0.1em 0.1em;
        }
      &:hover{
        font-size: 4.2rem;
      }
      }
    }
  }
`

export const HomeCakeContainer = styled.div`
  width: 100%;
  .box-cake{
    box-sizing: border-box;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    grid-template-rows: 1fr;
    @media(max-width: 960px) {
      display: flex;
      flex-direction: column;
    }
    .boxs{
      box-sizing: border-box;
      padding: 8%;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      width: 100%;
      transition: all 0.3s ease-in;
      &:hover{
        background: #DD722E;
        h3{
          color: black;
        }
        
      }
      @media(max-width: 960px) {
        display: flex;
        flex-direction: column;
        max-height: 200px;
        justify-content: center;
        img{
          display: none;
        }
      }
    }
    .cake1{
      background: #E56A77;
      
    }
    a{
      text-decoration: none;
    }
    .cake2{
      background: #CC3874;
      -webkit-transform: skew(-20deg);
      -moz-transform: skew(-20deg);
      -ms-transform: skew(-20deg);
      -o-transform: skew(-20deg);
      transform: skew(-20deg);
      width: 135%;
      @media(max-width: 960px) {
        width: 100%;
        -webkit-transform: skew(0deg);
        -moz-transform: skew(0deg);
        -ms-transform: skew(0deg);
        -o-transform: skew(0deg);
        transform: skew(0deg);
      }
      
      img{
        width: 33%;
        -webkit-transform: skew(20deg);
        -moz-transform: skew(20deg);
        -ms-transform: skew(20deg);
        -o-transform: skew(20deg);
        transform: skew(20deg);
        @media(max-width: 960px) {
          -webkit-transform: skew(0deg);
          -moz-transform: skew(0deg);
          -ms-transform: skew(0deg);
          -o-transform: skew(0deg);
          transform: skew(0deg);
        }
      }
      h3{
        margin-left: 12%;
        -webkit-transform: skew(20deg);
        -moz-transform: skew(20deg);
        -ms-transform: skew(20deg);
        -o-transform: skew(20deg);
        transform: skew(20deg);
        margin-top: 7%;
        @media(max-width: 960px) {
          margin-left: 0%;
          -webkit-transform: skew(0deg);
          -moz-transform: skew(0deg);
          -ms-transform: skew(0deg);
          -o-transform: skew(0deg);
          transform: skew(0deg);
        }
      }
    }
    .cake3{
      background: #F14F9B;
    }
    img{
      width: 50%;
    }
    h3{
      display: flex;
      font-family: 'Bebas Neue';
      font-style: normal;
      font-weight: 400;
      font-size: 2em;
      line-height: 38px;
      text-align: center;
      color: #FFFFFF;
      padding: 1rem;
      border: 0.1em solid white;
      align-items: center;
      transition: all 0.3s ease;
    }
  }
`

export const AboutUsContainer = styled.div`
  .box-about{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    min-height: 600px;
    padding-top: 2%;
    padding-bottom: 10%;
    h1{
      font-family: 'Bebas Neue';
      font-style: normal;
      font-weight: 400;
      font-size: 4rem;
      color: #000000;
      text-align: center;
      margin: 0px;
    }
    .about-text{
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 1.25rem;
      text-align: center;
      color: #000000;
      max-width: 850px;
      span{
        font-weight: 700;
      }
    }
    .img-collague{
      display: flex;
      gap: 4rem;
      @media(max-width: 960px) {
        justify-content: space-between;
        gap: 0%;
        margin: 5%;
      }
      img{
        filter: drop-shadow(4px 7px 10px rgba(0, 0, 0, 0.25));
        @media(max-width: 960px) {
          width: 30%;
        }
      }
    }
  }

`