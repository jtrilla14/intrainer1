import React, {useState} from 'react';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import EditYo from './components/EditYo';


import { v4 as uuidv4 } from 'uuid';

function App() {

  // Agregar visitantes
  const usersData = [
    { id: uuidv4(), name: 'Juan José', areav: 'Pabellon 1' , counter: '1', datetime:'2022-05-26T16:53'},
            { id: uuidv4(), name: 'María', areav: 'Adquisiciones' , counter: '2', datetime:'2022-05-26T17:12'},
        { id: uuidv4(), name: 'Jorge', areav: 'Laboratorio' , counter: '3', datetime:'2022-05-26T18:33'},
  ]

  const [users, setUsers] = useState(usersData)

  const addUser = (user) => {
           user.id = uuidv4()
        console.log(user)
    setUsers([
      ...users,
      user
    ])
  }

  // quitar los visitantes
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  // Editarlos
  const [editing, setEditing] = useState(false)

         const initialFormState = { id: null, name: '', areav: '', counter: '', datetime: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const editRow = user => {
              setEditing(true) 
    setCurrentUser({ id: user.id, name: user.name, areav: user.areav, counter: user.counter,datetime: user.datetime })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
                    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  return (

      
          

    
    <div className="container">


<div class="navbar">

            
            
          </div>

          
      <h1>Registro de Visitantes </h1>
      <div className="flex-row">
        <div className="flex-large">
        {editing ? (
          <div>
            <h2>Editar</h2>
            <EditYo 
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
        ) : (
          <div>
            <h2>Agregar</h2>
            <AddUserForm addUser={addUser}  />
          </div>
        )}
      </div>
        <div className="flex-large">
          <h2>Agregados recientemente</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
}

export default App;
