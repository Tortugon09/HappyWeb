import styled from "styled-components";



export const FormBox = styled.div`
  display: flex;
  .box-img-form-controlpanel{
    width: 60%;
    background-size: cover;
    clip-path: polygon(85% 100%, 100% 0%, 0% 0%, 0% 100%);
    img{
      width: 100%;
      height: 100%;
    }
  }
`


export const FormContainer = styled.div`
  width: 40%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  .form-box {
    height: 100%;
    width: 100%;
    max-width: 600px;
    max-height: 600px;
    font-family: 'Montserrat';
    display: grid;
    grid-template-rows: 1fr 1fr;
    .form-title{
      display: flex;
      align-items: flex-end;
      padding-bottom: 5%;
      h2{
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 400;
        font-size: 2.5rem;
        color: #ffff;
      }
    }
    
    form {
      display: flex;
      height: 100%;
      flex-direction: column;
      gap: 3%;
      a{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: .8rem;
        color: #CC3874;
        text-decoration: none;

      }
      .submit{
        margin-top: 3%;
        height: 15%;
        width: 40%;
        background: white;
        border: none;
        box-shadow: 4px 7px 5px rgba(0, 0, 0, 0.25);
        transition: all 0.5s ease;
        
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 29px;
        color: black;
        {
          
        }
        &:hover{
          background: #CC3874;
          color: #fff;
        }
      }
      .box-form {
        display: flex;
        flex-direction: column;
        height: 25%;
        .active{
          color: #ffff;
          transform: translateY(-100%);
        }
        label{
          position: absolute;
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          font-size: 1.3rem;
          color: #CC3874;
          transform: translateY(-60%);
          transition: all 0.2s ease-in-out;
        }
      }
    }
  }
  `
export const InputStyled = styled.input`
  height: 50%;
  border: none;
  border-bottom: 0.1rem solid #FFFFFF;
  background: none;
  outline: none;
   &:Focus {
  }
;
`
