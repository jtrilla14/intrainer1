import React from 'react'

const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Area visita</th>
        <th>Gafete</th>
        <th>Fecha/Hora</th>
      </tr>
    </thead>
    <tbody>
        {
            props.users.length > 0 ? (
                props.users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.areav}</td>
                        <td>{user.counter}</td>
                        <td>{user.datetime}</td>
                        <td>
                        <button 
                            className="button muted-button"
                            onClick={() => {
                                props.editRow(user)
                            }}
                            >
                            Editar
                        </button>
                        <button 
                            className="button muted-button"
                            onClick={() => props.deleteUser(user.id)}
                            >
                            Quitar
                        </button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>Sin datos</td>
                </tr>
            )
        }

      
    </tbody>
  </table>
)

export default UserTable