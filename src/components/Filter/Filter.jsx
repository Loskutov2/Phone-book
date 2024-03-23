import { Search } from "./Filter.styled"

export const Filter=({value, changeFilter})=>{

    const onChange=(e)=>{
        changeFilter(e.currentTarget.value)
    }

    return(
        <Search type="text" placeholder="FILTER: ALL" value={value} onChange={onChange}/>
    )
}