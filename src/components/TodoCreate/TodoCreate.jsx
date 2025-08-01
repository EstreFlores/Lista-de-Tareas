import React from 'react'
import{TodoContent, TodoContentHeader, TodoContentBotton, TodoModalBody, TodoTextArea, TodoButtonCreate} from './TodoCreate.style.js'

export default function TodoCreate({addTask, onCloseModal, onNewTask}) {
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
