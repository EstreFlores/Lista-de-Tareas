import React from 'react'
import{TodoContent, TodoContentHeader, TodoContentBotton, TodoModalBody, TodoTextArea, TodoButtonCreate} from './TodoCreate.style.js'

import {TodoContext} from '../../context/TodoContext.jsx'

export default function TodoCreate() {
  const {onNewTask, addTask, onCloseModal, dueDate, onDueDateChange} = React.useContext(TodoContext);

  return (
   <TodoContent onSubmit={addTask}>
    <TodoContentHeader>
        <h1>Crear tarea</h1>
        <TodoContentBotton onClick={onCloseModal}>X</TodoContentBotton>
    </TodoContentHeader>

    <TodoModalBody>
        <TodoTextArea onChange={onNewTask} className="inputSearch" type = "text" placeholder="Escribe una nueva tarea" />
        <input type="date"  value={dueDate} onChange={onDueDateChange}
         style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", marginTop: "10px" }}/>

        <TodoButtonCreate type= "submit">Crear</TodoButtonCreate>


    </TodoModalBody>
   </TodoContent>

  );
}
