import styled from "styled-components";

export const CakeContainer = styled.div`
  height: 100%;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(229, 106, 119, 0.5);
  box-shadow: -5px 7px 9px rgba(0, 0, 0, 0.25);
  flex: 1 46%;
  margin-top: 2%;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
  img{
    width: 70%;
    height: 200px;
  }

  h2 {
    font-family: 'VAL';
    font-style: normal;
    font-weight: 900;
    font-size: 2rem;
    line-height: 32px;
    color: #DD722E;
    -webkit-text-stroke: 2px #FFFFFF;
    @media(max-width: 960px) {
      font-size: 1rem;
      -webkit-text-stroke: 0.5px #FFFFFF;
    }
    

  }
  
  .text{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 1.3rem;
    color: #FFFFFF;
    text-align: center;
    padding: 4%;
    height: 100px;
    box-sizing: border-box;
    @media(max-width: 960px) {
      font-size: 0.7rem;
    }
  }
  h3{
    margin: 0px;
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    color: #FFFFFF;
    padding: 3%;
    box-sizing: border-box;
    @media(max-width: 960px) {
      font-size: 1rem;
    }
  }
  &:hover{
    background: #DD722E;
    h2{
      color: #ffff;
      -webkit-text-stroke: 2px #000;
    }
  }
  button{
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
    &:hover{
      background: black;
    }
    @media(max-width: 960px) {
      font-size: 1rem;
    }
  }
`

export const CakeBodyContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  column-gap: 2%;
  justify-content: center;
  align-items: center;
  width: 80%;
`

export const NavCakes = styled.nav`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .head-nav{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 0.2rem solid white;
    height: 50%;
    .nav-img{
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      img{
        width: 10%;
        padding: 2%;
      }
    }
    h2{
      font-family: 'Bebas Neue';
      font-style: normal;
      font-weight: 400;
      font-size: 2.4rem;
      color: #000000;
    }
  }
  ul{
    margin: 0px;
    padding: 2%;
    display: flex;
    justify-content: space-between;
    height: 50%;
    li{
      font-family: 'Bebas Neue';
      font-style: normal;
      font-weight: 400;
      font-size: 2.3rem;
      color: #000000;
      list-style: none;
      @media(max-width: 960px) {
        font-size: 1.5rem;
      }
      @media(max-width: 450px) {
        font-size: 1rem;
      }
    }
  }
`

export const BodyCakeStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 25%;
  padding-bottom: 5%;
  justify-content: center;
  align-items: center;
  .nav-container{
    width: 50%;
    max-height: 200px;
    margin-bottom: 6%;
    @media(max-width: 960px) {
      width: 80%;
    }
  }
  @media(max-width: 960px) {
    padding-top: 45%;
  }


`