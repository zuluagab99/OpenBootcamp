import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

const ConnectedComponent = ({ contact }) => {
  return (
    <div>
        <h1>
            Nombre: { contact.name }
        </h1>
        <h1>
            Apellido: { contact.lastname }
        </h1>
        <h1>
            Email: { contact.email }
        </h1>
        <h2>
            Contacto: { contact.connected ? 'en línea':'no disponible' }
        </h2>
    </div>
  )
}

ConnectedComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    name: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
}

export default ConnectedComponent
