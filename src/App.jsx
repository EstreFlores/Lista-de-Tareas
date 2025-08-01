import React from "react";
//import { useState } from 'react'
import TodoTitle from './components/TodoTitle/TodoTitle';
import TodoCard from './components/TodoCard/TodoCard';
import TodoCardList from './components/TodoCardList/TodoCardList';
import TodoSearch from './components/TodoSearch/TodoSearch';
import TodoModal from './components/TodoModal/TodoModal';
import TodoCreate from './components/TodoCreate/TodoCreate';

import { Appcontainer } from "./App.styles"

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

const allTask = [
  {title: "Hacer almuerzo", completed: false},
  {title: "Lavar los platos", completed: true},
  {title: "Estudiar React", completed: true},
  {title: "Hacer la compra", completed: true},
  {title: "Lavar la ropa", completed: false},
  {title: "Limpiar la casa", completed: false},
  {title: "Hacer ejercicio", completed: true},
]

function App() {
  
  const [showModal, setShowModal] = React.useState(true);

  const [task, setTask] = React.useState(allTask);

  const [search, setSearch] = React.useState("");

  const [newTaskInput, setNewTaskInput] = React.useState("");

  const taskCount = task.length;
  const completedTask = task.filter((task) => task.completed).length;

  const onComplete = (item) => {
   const newTask = task.map(t => {
      if (t.title === item.title) {
        return {
          ...t,
          completed: !t.completed
        }
      }
      return t;
    })
    setTask(newTask);
   };
  

  const onDelete = (item) => {
   const newTask = task.filter(t => t.title !== item.title);
    setTask(newTask);
  }

  
  const onSearch = (e) => {
    setSearch(e.target.value);
  }

  const onShowModal = () => {
  setShowModal(true);
  }

  const onCloseModal = () => {
    setShowModal(false);
  }

  const addTask = (e) => {
   e.preventDefault();
   const newTask = [...task, {title: newTaskInput, completed: false}];
   setTask(newTask);
   setNewTaskInput("");
   setShowModal(false);
  };

  const onNewTask = (e) => {
    setNewTaskInput(e.target.value);
  }
  
  return( 
  <Appcontainer>
       <TodoTitle
        onShowModal={onShowModal}
        taskCount={taskCount}
        completedTask={completedTask}
       />

       <TodoSearch onSearch={onSearch}search={search} />

       <TodoCardList>

        {task
        .filter(t => t.title.toLowerCase().includes(search.toLowerCase()))
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
          <TodoCreate 
          onNewTask={onNewTask}
          addTask={addTask} 
          onCloseModal={onCloseModal}/>
      </TodoModal>
      )}
      

      
      
      
    </Appcontainer>
  );
}

export default App
