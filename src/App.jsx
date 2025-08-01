import React from "react";
//import { useState } from 'react'
import TodoTitle from './components/TodoTitle/TodoTitle';
import TodoCard from './components/TodoCard/TodoCard';
import TodoCardList from './components/TodoCardList/TodoCardList';
import TodoSearch from './components/TodoSearch/TodoSearch';
import TodoModal from './components/TodoModal/TodoModal';
import TodoCreate from './components/TodoCreate/TodoCreate';

import { Appcontainer } from "./App.styles"
import { TodoContext } from './context/TodoContext'; 

//creando un nuevo componente
/* 
function AppData (props) {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}
  */


function App() {
  const {task, showModal, onComplete, onDelete, search, isLoading} = React.useContext(TodoContext);
  
  //localStorage.setItem("tasks", JSON.stringify(task)); 

  
  return( 
  <Appcontainer>
       <TodoTitle/>

       <TodoSearch />

       <TodoCardList>
        {isLoading && <div>Loading...</div>}

        {task
        .filter((t) => t.title.toLowerCase().includes(search.toLowerCase()))
        .map((item, index) => (
          <TodoCard
          key={index}
          item={item}
          onComplete={onComplete}
          onDelete={onDelete}
          />
        ))}
          

        {/*ESTO YA SE SUSTITUYO X LO DE ARRIBAAA
        <TodoCard onComplete={onComplete} onDelete={onDelete}/>
        <TodoCard onComplete={onComplete} onDelete={onDelete}/>
        <TodoCard onComplete={onComplete} onDelete={onDelete}/>
        <TodoCard onComplete={onComplete} onDelete={onDelete}/>
        <TodoCard onComplete={onComplete} onDelete={onDelete}/>*/}
       </TodoCardList>
     
      {showModal && (
        <TodoModal >
          <TodoCreate/>
      </TodoModal>
      )}
      
    </Appcontainer>
  );
}

export default App
