import { Contact } from "./Contact";
import { List } from "./Contact.styled";
export function ContactList({contacts}){
    return(
        <List>
            {contacts.map((contact)=>(
                <Contact
                    name={contact.name}
                    num={contact.num}
                    key={contact.id}
                    id={contact.id}
                />
            ))}
        </List>
    )
}