import styled from "styled-components";

export const UserContainer = styled.div`
    padding-top: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20%;
  .title{
    display: flex;
    width: 80%;
    border-bottom: 0.1rem solid #CC3874;
    align-items: center;
    justify-content: space-between;
    a{
      button{
        background: transparent;
        border: none;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 1.2rem;
        color: #DD722E;
        transition: all 0.3s ease;
        &:hover{
          background: white;
          border-radius: 20%;
        }
        @media(max-width: 960px) {
          font-size: 1rem;
        }
        @media(max-width: 450px) {
          font-size: 0.7rem;
        }
      }
    }
    h2{
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      line-height: 44px;
      color: #CC3874;
    }
  }
  .dates{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    border-bottom: 0.1rem solid #CC3874;
    .title-date{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 200px;
      h3{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 29px;

        color: rgba(0, 0, 0, 0.54);
      }
    }
    .content-dates{
      width: 40%;
      h4{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;

        color: #CC3874;
      span{
        color: rgba(0, 0, 0, 0.54);
      }
      }
    }
    .buttoms{
      width: 280px;
      button{
        background: transparent;
        border: none;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 1.2rem;
        color: #DD722E;
        transition: all 0.3s ease;
        &:hover{
          background: white;
          border-radius: 20%;
        }
        @media(max-width: 960px) {
          font-size: 1rem;
        }
        @media(max-width: 450px) {
          font-size: 0.7rem;
        }
      }
    }
  }`