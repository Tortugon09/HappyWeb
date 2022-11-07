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
export const InputStyled = styled.input`
  height: 50%;
  border: none;
  border-bottom: 0.1rem solid #FFFFFF;
  background: none;
  outline: none;
  margin: 10px;
  &:Focus {
  }
;
`
export const FormContainer = styled.div`
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
        color: #000;
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
        height: 30%;
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
        position: relative;
        .active{
          color: #000;
          transform: translateY(-100%);
        }
        label{
          position: absolute;
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          font-size: 1.3rem;
          color: #CC3874;
          top: -5px;
          
          transform: translateY(-60%);
          transition: all 0.2s ease-in-out;
        }
      }
    }
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

export const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}

	p {
		font-size: 18px;
		margin-bottom: 20px;
	}

	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
  form{
    display: flex;
    flex-direction: column;
    input{
      margin-bottom: 10px;
    }
  }
`;

export const BodyProductsContainer = styled.div `
  margin-top: 100px;
  padding: 1%;
  .body-header{
    display: flex;
    justify-content: space-between;
    button{
      width: 150px;
      height: 40px;
      background-color: #4CAF50;
      border: none;
      border-radius: 8px;
      &:hover{
        background: black;
        color: white;
      }
    }
  }
  
  table, th, td, h1 {
    border: none;
    font-family: Arial;
  }

  table {
    border-collapse: collapse;
    width: 60%;
    text-align: center;
    margin: 0 0 auto;
    
  }
  tr td{
    height: 60px;
    button{
      margin: 3px;
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 8px;
      font-family: Arial;
      transition: all 0.3s ease;
      cursor: pointer;
      &:hover{
        background: black;
        color: white;
      }
    }
    .del{
      background-color: #f44336;
    }
    .edit{
      background-color: #008CBA;
    }
  }
  

  th, td {
    padding:10px 20px;
    border-bottom: 2px solid #000;
    border-collapse: collapse;
  }

  th {
    background: rgba(229, 106, 119, 0.5);
    color: #fff;
  }
  tr{
    transition: all 0.3s ease;
  }

  tr:hover {
    background: #DD722E;

  }
`