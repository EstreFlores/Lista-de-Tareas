import React from "react";
import { TodoInputSearch } from "./TodoSearch.style";

import { TodoContext } from "../../context/TodoContext";

export default function TodoSearch() {
  const {onSearch, search, isLoading} = React.useContext(TodoContext);
  
  return (
  <div>
    <TodoInputSearch value={search} onChange = {onSearch} type = "text" placeholder={isLoading ? "Cargando...": "Buscar"} />
   
  </div>
  ) ;
}

