import React from "react"
import s from "./SocialMedia.module.css"

const SocialMedia = ({ contacts }) => {

return (
   <>
    {Object.keys(contacts).map(key =>{
        return <Contacts key={key} contact={contacts[key]} contactTitle={key} />
    })}
    </>
    )
}

const Contacts = ({contact, contactTitle}) => {
    return <>{ contact ? <div className={s.contacts}>{contactTitle} : <a className={s.contactsLink} href={contact}>{contact}</a></div> : null }</>
}

export default SocialMedia