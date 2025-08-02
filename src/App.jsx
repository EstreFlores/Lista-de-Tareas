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

import SplashScreen from './components/SplashScreen/SplashScreen';
import TodoProgress from './components/TodoProgress/TodoProgress';

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

  // aki estoy agregando la nueva funcion qe es la de bienvenida
   const [isSplashVisible, setIsSplashVisible] = React.useState(true);

    React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSplashVisible(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  if (isSplashVisible) return <SplashScreen />;



  
  return( 
  <Appcontainer>
       <TodoTitle/>

       <TodoProgress />

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
