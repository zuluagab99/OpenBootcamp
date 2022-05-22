import React from 'react'
import { Contact } from '../../models/contact.class'
import ConnectedComponent from '../Pure/connected'

const ContactComponent = () =>{

    const newContact = new Contact('Alejandro', 'Zuluaga', 'email@gmail.com', true)

    return (
    <div>
        <ConnectedComponent contact={newContact}></ConnectedComponent>
    </div>
  )
}

export default ContactComponent
