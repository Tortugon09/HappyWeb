import styled from "styled-components";
import Background from "../../assets/Img/Header/backgroundHeader.svg"

export const NavContainer = styled.nav`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  background: white;
  z-index: 3;
  
  .box-nav{
    box-sizing: border-box;
    display: flex;
    gap: 20%;
    justify-content: center;
    align-items: center;
    max-width: 1800px;
    width: 100%;
    .box1{
      box-sizing: border-box;
      display: flex;
      width: 40%;
      gap: 2rem;
      img{
        width: 5rem;
        padding: 2em;
      }
      .menu{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        li{
          list-style: none;
          a{
            color: black;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 1.2rem;
            text-decoration: none;
            padding: 1em;
            transition: all 0.7s ease;
            
            &:hover{
              background: #CC3874;
              color: white;
            }
          }
        }
      }
    }
    .box2{
      box-sizing: border-box;
      display: flex;
      align-items: center;
      width: 30%;
      gap: 3%;
      justify-content: center;
      h3{
      a{
        color: black;
        list-style: none;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 1.2rem;
        text-decoration: none;
      }
      }
      a{
        display: flex;
        text-decoration: none;
        align-items: center;
        p {
          color: #FFC2D4;
          list-style: none;
          font-family: 'Oswald';
          font-style: normal;
          font-weight: 700;
          font-size: 2.2rem;
          text-decoration: none;

        }
      }
      svg{
        color: black;
        font-style: normal;
        font-size: 2rem;
      }
      .search-box{
        display: flex;
        justify-content: flex-end;
        input{
          outline: none;
          box-sizing: border-box;
          width: 0%;
          padding: .5em;
          font-size: 1rem;
          border: none;
          transition: all .7s ease;
          &::placeholder{
            color:grey;
          }
          &:focus{
            width: 100%;
            border-bottom: 2px solid black;
          }
        }
        .btn label svg{
          color: black;
          font-style: normal;
          font-size: 2rem;
          transition: all .7s ease;
        }
        &:hover input{
          width: 100%;
          border-bottom: 2px solid black;

        }
        &:hover label svg{
          transform: rotate(360deg);
        }
      }

    }
  }

`

export const EffectM = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  width: 100%;
  height: 26rem;
  z-index: -1;
  @media(max-width: 1640px){
    top: 12px;
  }
  @media(max-width: 1326px){
    top: 60px;
  }
`

