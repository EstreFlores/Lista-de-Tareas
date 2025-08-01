import React from 'react'
import { TodoTitleContainer, TodoTitleText, TodoButtonAdd } from "./TodoTitleStyle.style";

export default function TodoTitle({ taskCount, completedTask, onShowModal }) {
  return (
    <TodoTitleContainer>
      <TodoTitleText>
        Tarea {completedTask} de {taskCount}
      </TodoTitleText>
      <TodoButtonAdd onClick={onShowModal}>+</TodoButtonAdd>
    </TodoTitleContainer>
  );
}
