// import React from 'react';

// export default class App extends React.Component {
//   state={
//     message: "",
//     status: true
//   }
  
//   componentDidMount(){
//     setTimeout(()=>{this.setState({
//       message:"Bom dia"
//     })},5000)
// }

//   render(){
//     return(
//       < >
//         <h1>{this.state.message}</h1>
//         {this.state.status  &&  <OutroComponente/>}
//         <button onClick={() =>{this.setState({status: !this.state.status})}}>Esconder Componente</button>
//       </>
//     );
//   }
// }

// class OutroComponente extends React.Component{

//   componentWillUnmount(){
//     document.title = 'O componente foi desmontado '
//   }

//   render(){
//     return(
//       < >
//       <h1>Eu sou outro componente</h1>
//       </>
//     )
//   }
// }

// #########################################################

// import React, { useState, useEffect } from 'react'

// export default function App(){
//   const [users, setUsers] = useState([
//   {name: 'Isa', id:1},
//   {name:'Paula', id:2},
//   {name:'Luan', id:3},
//   {name:'Raquel', id:4}
// ])

//   const [name, setName] = useState('Paula')

//   useEffect(() =>{
//    console.log('A página foi montada')
//   }, [])
  
//   function DeleteItem(id){
//     let FilterName = users.filter(item => item.id !== id)
//     setUsers(FilterName)
//   }

//   return (
//     < >
//     <ul>{users.map(item => (
//       <li key={item.id}>{item.name} <button onClick={() =>{DeleteItem(item.id)}}>Delete Item</button></li>
//     ))}</ul>
//     <h3>{name}</h3>
//     <button onClick={() =>{setName('Luan')}}>Change Name</button>
//     </>
//   )
// }

// #########################################################
 
import React, { useEffect, useState } from 'react'

export default function App(){
  const[status, setStatus] = useState(true)

  return(
    < >
     {status && <Componente />}
     <button onClick={() =>{setStatus(!status)}}>{status ? 'Esconder componente' : 'Aparecer Componente'}</button>
    </>
  )
}

const Componente = () =>{

  useEffect(() => {
    document.title = 'Componente aparecendo'
    console.log('Montado')

    return () =>{
      document.title = 'Componente foi desmontado'
      console.log('Desmontado')
    }
  },[])

  return(
    < >
    <h2>Esse é o componente</h2>
    </>
  )
}