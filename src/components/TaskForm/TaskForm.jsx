import { useState } from "react";
import { Btn, Input } from "./TaskForm.styled";

export const TaskForm=({addToDo})=>{
    const [num,changeNum] = useState('')
    const [nam,changeName] = useState('')
    const onFormSubmit=(e)=>{
        e.preventDefault();
        addToDo(e.currentTarget.elements.name.value, e.currentTarget.elements.num.value)
        changeName(''); changeNum('')
    }
    const onFormChange=(e)=>{
        const name = e.currentTarget.name
        const value = e.currentTarget.value
        name==='name'?changeName(value):changeNum(value)
    }
        return(
            <form onSubmit={onFormSubmit}>
                <Input name="name" value={nam}
                onChange={onFormChange}
                />
                <Input name="num" value={num}
                onChange={onFormChange}
                />
                <Btn type="submit">CREATE</Btn>
            </form>
        )
}