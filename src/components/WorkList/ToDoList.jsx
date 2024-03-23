import { ToDo } from "./ToDo";
import { List } from "./ToDo.styled";
export function ToDoList({toDos, onDelete}){
    
    return(
        <List>
            {toDos.map((toDo)=>(
                <ToDo
                    name={toDo.name}
                    num={toDo.num}
                    key={toDo.id}
                    onDelete={onDelete}
                    id={toDo.id}
                />
            ))}
        </List>
    )
}