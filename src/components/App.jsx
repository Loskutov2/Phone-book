import { createContext, useEffect, useState } from "react"
import { ContactList } from "./List/ContactList";
import { nanoid } from "nanoid";
import { TaskForm } from "./TaskForm/TaskForm";
import { Filter } from "./Filter/Filter";

export const MyData = createContext(null)

export const App =()=>{
  const [contacts, changeContacts]=useState([])
  const [fillter, changeFilter]=useState('')
  useEffect(()=>{
    changeContacts(JSON.parse(localStorage.getItem('contacts')))
  },[])

  const addContact=(name, num)=>{
      const newcontact={
        name:name,
        num:num,
        id: nanoid()
      }
      changeContacts([ ...contacts, newcontact])
      localStorage.setItem('contacts', JSON.stringify(contacts))
  }


  const onDelete=(contactId)=>{
        changeContacts(contacts.filter(contact=>contactId!==contact.id))
  }
  useEffect(()=>{window.localStorage.setItem('contacts', JSON.stringify(contacts))}, [contacts])

  const visibleContacts=()=>{
    return contacts.filter(contact=>contact.name.toLowerCase().includes(fillter.toLowerCase())||contact.num.includes(fillter))
  }
  const [data]=useState({onDelete: onDelete})
  
    return (
      <MyData.Provider value={data}>
        <TaskForm addContact={addContact}/>
        <Filter value={fillter} changeFilter={changeFilter}/>
        {contacts&&<ContactList contacts={visibleContacts()}/>}
      </MyData.Provider>
    );
};
