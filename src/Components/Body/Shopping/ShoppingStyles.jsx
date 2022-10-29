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
  .cake-data{
    display: flex;
    width: 66%;
    gap: 10%;
    .img-add{
      width: 33%;
      height: 10%;
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
      }
      h3{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: #CC3874;
        transition: all 0.2s ease;
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
`
export const ShoppingBox = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 25%;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 10%;
  h2{
    width: 70%;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    color: #CC3874;
  }
`
