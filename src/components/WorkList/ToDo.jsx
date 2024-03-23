import { DelBtn, ListItem } from "./ToDo.styled"

export function ToDo({name, num, onDelete, toggleCompleted, id}){
    return(
        <ListItem>
            <p>{name}</p>
            <p>{num}</p>
            <DelBtn type='button' onClick={()=>{onDelete(id)}}>DELETE</DelBtn>
        </ListItem>
    )
}