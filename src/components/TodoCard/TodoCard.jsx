
import React from 'react';
import { TodoCardContainer, TodoCardButton, TodoCardText } from './TodoCard.style.js';



export default function TodoCard({item, onComplete, onDelete}) {

  const onClick = () => {
    alert("Clickeado");
  }

  return (
    <TodoCardContainer> 
      <TodoCardButton onClick={() => onComplete (item)}>{item.completed ? '😊': '✔️'}</TodoCardButton>
      <TodoCardText>{item.title}</TodoCardText>
      
      <TodoCardButton onClick={() => onDelete (item) }>❌</TodoCardButton>
    
    </TodoCardContainer>
  )
}

