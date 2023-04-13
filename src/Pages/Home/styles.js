import styled from "styled-components";     // 1- aqui estou importando meus componentes do CSS   
import { Link } from "react-router-dom";  


export const Container = styled.div ` 
  background-size: cover;                  // é para a imagem cobrir toda a area, e não ficar repetindo
  display: flex;
  background: black;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 106vh;
`;
export const Imagem = styled.img `  
  margin-top: 0px;
  width: 50vh;
`;

export const ContainerItens = styled.div `  
  padding: 10px 25px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 50vh;
  gap: 4px;
`;

export const H1 = styled.h1 `
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 35px;
  text-align: center;
  color: #FFFFFF;
  margin-bottom: 40px;
  margin-top: -45px;
`
export const InputLabel = styled.p `  
  letter-spacing: -0.408px;
  color: #EEEEEE;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  margin-left: 10px;
  width: 100%;
`;

export const Input = styled.input `  
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 342px;
  height: 40px;
  border: none;
  outline: none;
  padding-left: 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  color: #FFFFFF;
  margin-bottom: 15px;
  width: 100%;
`;

export const Button = styled(Link) `  
  width: 342px;
  height: 50px;
  margin-top: 20px;
  background: rgb(238 5 5 / 80%);
    border-radius: 5px;
  border: none;
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
  width: 100%;
  &:hover{
    opacity: 0.8;
  }
  &:active{
    opacity: 0.5;
  }
`