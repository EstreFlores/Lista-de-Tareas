import React from "react";
import { TodoInputSearch } from "./TodoSearch.style";



export default function TodoSearch({onSearch, search}) {

React .useEffect(() => {
console.log("search", search);
}, []);

  return (
  <div>
    <TodoInputSearch value={search} onChange = {onSearch} type = "text" placeholder="Search todos..." />
   
  </div>
  ) ;
}

