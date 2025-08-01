import React from 'react'
import { TodoTitleContainer, TodoTitleText, TodoButtonAdd } from "./TodoTitleStyle.style";
import { TodoContext } from '../../context/TodoContext';

export default function TodoTitle() {
  const {isLoading, completedTask, taskCount,  onShowModal } = React.useContext(TodoContext);
  return (
    <TodoTitleContainer>
      <TodoTitleText>
        {isLoading ? "Loading..." :  `Tarea ${completedTask} de ${taskCount} `}
      </TodoTitleText>
      <TodoButtonAdd disabled={isLoading} onClick= {onShowModal}>+</TodoButtonAdd>
    </TodoTitleContainer>
  );
}
