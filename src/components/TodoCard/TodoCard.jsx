
import React from 'react';
import { TodoCardContainer, TodoCardButton, TodoCardText } from './TodoCard.style.js';



export default function TodoCard({item, onComplete, onDelete}) {
   const isExpired = item.dueDate && new Date(item.dueDate) < new Date();


  const onClick = () => {
    alert("Clickeado");
  }

  return (
    <TodoCardContainer> 
      <TodoCardButton onClick={() => onComplete (item)}>{item.completed ? '😊': '✔️'}</TodoCardButton>

      <div style={{ flex: 1 }}>
      <TodoCardText>{item.title}</TodoCardText>

      {/* 📅 aki estamos mostrando la fecha */}
        {item.dueDate && (
          <p style={{ fontSize: "0.85rem", margin: "4px 0", color: "#64748b" }}>
            📅 Vence: {item.dueDate}
          </p>
        )}


        {/* ⚠️ aki mostramos un tipo alert si esque la alerta  ya pasó */}
        {isExpired && (
          <p style={{ color: "red", fontWeight: "bold", fontSize: "0.8rem" }}>
            ⚠️ ¡Tarea vencida!
          </p>
        )}
      </div>
      
      <TodoCardButton onClick={() => onDelete (item) }>❌</TodoCardButton>
    
    </TodoCardContainer>
  )
}

