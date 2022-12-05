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
  background:  white;
  z-index: 3;
  @media(max-width: 960px){
    height: 80px;
  }
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
      @media(max-width: 960px){
        width: 100%;
      }
      img{
        width: 5rem;
        padding: 2em;
        @media(max-width: 960px){
          display: none;
        }
      }
      .menu{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        @media(max-width: 960px){
          justify-content: center;
        }
        .mobile-menu{
          display: none;
          top: 10px;
          li{
            a{
              display: flex;
              color: #FFC2D4;
              p{
                margin: 0px;
                color: black;
                list-style: none;
                font-family: 'Oswald';
                font-style: normal;
                font-weight: 700;
                font-size: 2rem;
                text-decoration: none;
              }
            }
          }
          @media(max-width: 960px){
            display: flex;
            width: 100%;
            justify-content: space-between;
            max-width: 600px;
          }
        }
        .menu-desktop{
          display: flex;
          @media(max-width: 960px){
            display: none;
          }
        }
        
        
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
              border-radius: 50%;
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
      @media(max-width: 960px){
        display: none;
      }
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
        @media(max-width: 960px){
          display: none;
        }
      }

    }
  }

`

export const EffectM = styled.div`
  background-size: contain;
  background-repeat: repeat-x;
  position: absolute;
  width: 100%;
  height: 26rem;
  z-index: -1;
  @media(max-width: 1640px){
    top: 18px;
  }
  @media(max-width: 1326px){
    top: 60px;
  }
  @media(max-width: 960px){
    top: 80px;
  }
`

