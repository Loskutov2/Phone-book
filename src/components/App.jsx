import { useEffect, useState } from "react"
import { ToDoList } from "./WorkList/ToDoList";
import { nanoid } from "nanoid";
import { TaskForm } from "./TaskForm/TaskForm";
import { Filter } from "./Filter/Filter";

export const App =()=>{
  const [toDos, changeToDos]=useState([])
  const [fillter, changeFilter]=useState('')

  useEffect(()=>{
    const toDos=JSON.parse(localStorage.getItem('toDos'))
    changeToDos(toDos)
  },[])

  const addToDo=(name, num)=>{
    const newToDo={
      name:name,
      num:num,
      id: nanoid()
    }
    changeToDos([newToDo, ...toDos])
  }

  const onDelete=(toDoId)=>{
        changeToDos(toDos.filter(toDo=>toDoId!==toDo.id))
  }
  useEffect(()=>{window.localStorage.setItem('toDos', JSON.stringify(toDos))}, [toDos])

  const visibleToDos=()=>{
    return toDos.filter(toDo=>toDo.name.toLowerCase().includes(fillter.toLowerCase())||toDo.num.includes(fillter))
  }
  
    return (
      <>
        <TaskForm addToDo={addToDo}/>
        <Filter value={fillter} changeFilter={changeFilter}/>
        {toDos&&<ToDoList toDos={visibleToDos()} onDelete={onDelete}/>}
      </>
    );
};
