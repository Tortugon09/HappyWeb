import styled from "styled-components";




export const Overlay = styled.div `
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.5);
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ContainerModal = styled.div`
width: 600px;
  min-height: 100px;
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0px;
  padding: 20px;

`

export const EncabezadoModal = styled.div`
    display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;
  
  h3{
    font-family: Arial;
    font-weight: 500;
    font-size: 16px;
    color: #1766DC;
  }

`
export const ButtonClose = styled.button`
    position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 5px;
  color: #1766DC;
  padding: 0px;
  &:hover{
    background: #f2f2f2;
  }
  svg {
    width: 100%;
    height: 100%;
  }


`

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