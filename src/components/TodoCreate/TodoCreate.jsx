import React from 'react'
import{TodoContent, TodoContentHeader, TodoContentBotton, TodoModalBody, TodoTextArea, TodoButtonCreate} from './TodoCreate.style.js'

import {TodoContext} from '../../context/TodoContext.jsx'

export default function TodoCreate() {
  const {onNewTask, addTask, onCloseModal} = React.useContext(TodoContext);
  return (
   <TodoContent onSubmit={addTask}>
    <TodoContentHeader>
        <h1>Crear tarea</h1>
        <TodoContentBotton onClick={onCloseModal}>X</TodoContentBotton>
    </TodoContentHeader>

    <TodoModalBody>
        <TodoTextArea onChange={onNewTask} className="inputSearch" type = "text" placeholder="Escribe una nueva tarea" />

        <TodoButtonCreate type= "submit">Crear</TodoButtonCreate>


    </TodoModalBody>
   </TodoContent>

  );
}
