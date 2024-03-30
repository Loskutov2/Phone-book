import { DelBtn, ListItem } from "./Contact.styled"
import { useContext } from "react"
import { MyData } from "components/App"

export function Contact({name, num, toggleCompleted, id}){
    const onDelete = useContext(MyData).onDelete
    return(
        <ListItem>
            <p>{name}</p>
            <p>{num}</p>
            <DelBtn type='button' onClick={()=>{onDelete(id)}}>DELETE</DelBtn>
        </ListItem>
    )
}