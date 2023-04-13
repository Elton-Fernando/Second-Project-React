import React, { useState, useRef } from "react";           // 1- importei o REACT 

import axios from 'axios';

import Burguer from "../../Assets/burger.svg"   // 7- importei a imagem

import { Container, H1, Imagem, ContainerItens, InputLabel, Input, Button, } from "./styles"; // 5- importei o CSS


function App() {                    
  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser() {

const {data: newUser} = await axios.post("http://localhost:3001/order",{  //- para ter o acesso que preciso, é preciso usar o DATA
  name:inputName.current.value,                                     //- da linha 16 a 24 é para ter acesso ao POST do back
  age:inputAge.current.value})
 
   setUsers([ ...users, newUser ])
   }

  return (                          
    
    <Container>

      <Imagem alt="logo-imagem" src={Burguer} />
      <ContainerItens>
        <H1>Faça Seu Pedido!</H1>

        <InputLabel> Pedido </InputLabel>
        <Input ref={inputName} placeholder="1 X-Salada, 1 Coca-cola" />

        <InputLabel> Nome do Cliente</InputLabel>
        <Input ref={inputAge} placeholder="Elton Fernando" />

        <Button to="/usuarios" onClick={addNewUser}>  {/*o TO="/USUARIOS" É O DESTINO DO MEU LINK*/}
          Finalizar Pedido! 
        </Button>
        

      </ContainerItens>
    </Container>
  );
}

export default App                   // 3- eu to exportando o APP, pq no styles eu to importando o APP