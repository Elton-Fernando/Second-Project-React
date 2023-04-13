import React, { useState, useEffect } from "react";           // 1- importei o REACT 

import axios from 'axios';

import burguer1 from "../../Assets/burger1.svg"   // 7- importei a imagem
import Lixeira from "../../Assets/lixeira.svg"

import { Container, H1, Imagem, ContainerItens, Button, User } from "./styles"; // 5- importei o CSS


function Users() {                     // 2- criei uma função, Para trazer o html
  const [users, setUsers] = useState([]);



  useEffect(()=> { //- o useEffect é acionado em 2 ocasiões: quando a aplicação iniciar e quando um estado do array[] é alterado, ou seja quando clicar em cadastrar
  
    async function fetchUsers(){
    const {data: newUsers} = await axios.get('http://localhost:3001/order'); //- é preciso usar o data para buscar as informações que vem do meu cadastrar
    
    setUsers(newUsers)
   }
   fetchUsers()
    
  },[])


  async function deleteUser(userId){
    await axios.delete(`http://localhost:3001/order/${userId}`)

    const newUsers = users.filter( user => user.id !== userId)
    setUsers(newUsers)
  }


  return (                          
    
    <Container>

      <Imagem alt="logo-imagem" src={burguer1} />
      <ContainerItens>
        <H1>Pedidos</H1>

        <div class="maior">
        <ul>
          {users.map(user => (         // - isto aqui é para percorrer usuario por usuario... assim eu descrevo os users so uma vez
            <User key={user.id}>
              
              <div class="menor">  
              <p>{user.name}</p> - <p>{user.age}</p>
              </div>
              <button onClick={() => deleteUser(user.id)}> 
                <img src={Lixeira} alt="lata-de-lixo" /> 
              </button>
              
            </User>
          ))
          }
        </ul>
        </div>
        <Button to="/">
         Voltar
        </Button>

      </ContainerItens>
    </Container>
  );
}

export default Users                   // 3- eu to exportando o APP, pq no index eu to importando o APP