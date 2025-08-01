import React,  { createContext } from 'react';
import useStorage from '../hooks/useStorage';

//const allTask = [
//  {title: "Hacer almuerzo", completed: false},
//  {title: "Lavar los platos", completed: true},
//  {title: "Estudiar React", completed: true},
//  {title: "Hacer la compra", completed: true},
//  {title: "Lavar la ropa", completed: false},
//  {title: "Limpiar la casa", completed: false},
//  {title: "Hacer ejercicio", completed: true},
//];


const TodoContext = createContext();

const TodoProvider = ({children}) => {
  const {data: task, isLoading, isError, saveData:setTask  } = useStorage("tasks", []);

  const [showModal, setShowModal] = React.useState(false);

  //const [task, setTask] = React.useState(data);

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
  };


    return (
        <TodoContext.Provider 
        value={{
            showModal,
            task,
            search,
            taskCount,
            completedTask,
            onComplete,
            onDelete,
            onSearch,
            onShowModal,
            onCloseModal,
            addTask,
            onNewTask,
            isLoading,
            isError
            
        }}>
        {children}
        </TodoContext.Provider>
    );
    };

    export  {TodoContext, TodoProvider};