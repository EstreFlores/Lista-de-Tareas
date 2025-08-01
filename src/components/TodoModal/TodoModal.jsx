import React from 'react'
import ReactDOM from 'react-dom'
import { TodoModalStyle } from './TodoModal.style.js'; 

export default function TodoModal({children}) {
  return ReactDOM.createPortal(
    <TodoModalStyle>{children}</TodoModalStyle>,
    document.getElementById('modal')

  )
}
