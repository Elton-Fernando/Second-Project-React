import styled from "styled-components";     // 1- aqui estou importante meus componentes do CSS 
import { Link } from "react-router-dom";     

export const Container = styled.div `  
  background-size: cover;                   // é para a imagem cobrir toda a area, e não ficar repetindo
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 122vh;
`;
export const Imagem = styled.img `  
  margin-top: 0px;
  width: 30vh;
`;

export const ContainerItens = styled.div `  
  border-radius: 61px 61px 0px 0px;
  padding: 10px 36px;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 72vh;
  width: 50vh;
`;

export const H1 = styled.h1 `
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 47px;
  text-align: center;
  color: #FFFFFF;
  margin-bottom: 0px;
    margin-top: -20px;
`

export const Button = styled(Link) `  
  width: 100%;
  height: 50px;
  margin-top: 50px;
  background: transparent;
  border-radius: 5px;
  border: 1px solid #ffffff;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 28px;
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  &:hover{
    opacity: 0.8;
  }
  &:active{
    opacity: 0.5;
  }
  img{
    transform: rotateY(180deg);    // rotacionar a imagem (girar)
  }
`;


export const User = styled.li `
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 100%;
  border: none;
  outline: none;
  margin-top: 10px;
  p{
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: #ffffff;
    margin-left: 10px;
  }
  button{
    background: none;
    border: none;
    cursor: pointer;
  }
  img{
    margin-right: 10px
  }
`