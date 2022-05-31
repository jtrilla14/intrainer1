import React, { useState, useEffect } from 'react'

const EditUserForm = props => {


    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const [user, setUser] = useState(props.currentUser)

    const handleInputChange = event => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    return (
        <form
        onSubmit={event => {
            event.preventDefault()

            props.updateUser(user.id, user)
        }}
        >
        <label>Nombre</label>
        <input type="text" name="name" value={user.name} onChange={handleInputChange} />
        <label>Area visita</label>
        <input type="text" name="areav" value={user.areav} onChange={handleInputChange} />
        <label>Gafete</label>
        <input type="text" name="counter" value={user.counter} onChange={handleInputChange} />
        <label>Fecha/Hora</label>
        <input type="datetime-local" name="datetime" value={user.datetime} onChange={handleInputChange} />
        
        <button>Actualizar</button>
        <button onClick={() => props.setEditing(false)} className="button muted-button">
            Cancel
        </button>
        </form>
    )
}

export default EditUserForm