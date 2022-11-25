import styled from "styled-components";

export const AddBox = styled.div`
  border-top: 0.1rem solid #CC3874;
  border-bottom: 0.1rem solid #CC3874;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 70%;
  padding: 1rem;
  gap: 30%;
  @media(max-width: 960px) {
   gap: 5%;
  }
  .cake-data{
    display: flex;
    width: 66%;
    gap: 10%;
    .img-add{
      width: 33%;
      height: 10%;
      @media(max-width: 960px) {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 130px;
      }
      img{
        width: 100%;
      }
    }
    .dates-add{
      .name{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;

        color: rgba(0, 0, 0, 0.54);
        @media(max-width: 960px) {
          font-size: 1rem;
        }
        
      }
      h3{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: #CC3874;
        transition: all 0.2s ease;
        @media(max-width: 960px) {
          font-size: 1rem;
        }
        @media(max-width: 450px) {
          font-size: 0.7rem;
        }
      }
    }
  }
  .bottoms-add{
    width: 33%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    div{
      margin: 5%;
    }
  }

`
export const Buttom = styled.button`
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
`
export const ShoppingBox = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 25%;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 10%;
  @media(max-width: 960px) {
    padding-top: 50%;
  }
  h2{
    width: 70%;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    color: #CC3874;
  }
  .header{
    display: flex;
    justify-content: space-between;
    width: 70%;
    h2{
      width: 70%;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 2rem;
      color: #CC3874;
    }
  }
`
export const BuyAll = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  padding-bottom: 10%;
  @media(max-width: 960px) {
    flex-direction: column;
      
  }
  h2{
    width: auto;
    @media(max-width: 960px) {
      font-size: 1rem;
    }
    @media(max-width: 450px) {
      font-size: 0.7rem;
    }
  }
  .buy{
    display: flex;

    button {
      background: #DD722E;
      border: 1px solid #fff;
      font-family: 'Oswald';
      font-style: normal;
      font-weight: 700;
      font-size: 2rem;
      line-height: 53px;
      text-align: center;
      color: #FFFFFF;
      margin: 1%;
      transition: all 0.3s ease;

      &:hover {
        background: black;
      }
      @media(max-width: 960px) {
        font-size: 1rem;
      }
      @media(max-width: 450px) {
        font-size: 0.7rem;
      }
    }
  }
`

