import React from 'react'

import { ProgressContainer, ProgressText, ProgressBar, ProgressFill } from './TodoProgress.styles';
import { TodoContext } from '../../context/TodoContext';


const TodoProgress = () => {
  const { taskCount, completedTask } = React.useContext(TodoContext);
  
  const percentage = taskCount > 0 ? Math.round((completedTask / taskCount) * 100) : 0;

  return (
    <ProgressContainer>
      <ProgressText>Progreso: {percentage}% ({completedTask} de {taskCount})</ProgressText>
      <ProgressBar>
        <ProgressFill style={{ width: `${percentage}%` }} />
      </ProgressBar>
    </ProgressContainer>
  );
};

export default TodoProgress;
