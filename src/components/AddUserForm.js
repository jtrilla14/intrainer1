import React from 'react';
import { useForm } from 'react-hook-form'
let counter=5;
const AddUserForm = (props) => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        data.id = null
        console.log(data)
        props.addUser(data)
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            
            
            <label>Nombre completo</label>
            <input 
                type="text" 
                name="name"
                ref={register({required: {value: true, message: 'Valor requerido'}})}
                />
            <div>
                {errors?.name?.message}
            </div>
            <label>No gafete</label>
            <input 
                type="text" 
                name="counter"
                ref={register({required: {value: true, message: 'Valor requerido'}})}
                />

<label>Area que visita</label>
                   
                   <input 
                     type="text" 
                     name="areav" 
                     ref={register({required: {value: true, message: 'Valor requerido'}})}
                     />
                 
                 <div>
                     {errors?.areav?.counter?.datetime?.message}
                 </div>
            <p>Gafetes generados: <span>{counter++}</span></p>
            
            <label>Fecha y Hora de entrada</label>
            <input 
                type="datetime-local" 
                name="datetime"
                ref={register({required: {value: true, message: 'Valor requerido'}})}
                />
            <div>
                {errors?.name?.message}
            </div>
            <label>Foto ID</label>
            <input 
                type="file" 
                name="name"
                ref={register({required: {value: true, message: 'Valor requerido'}})}
                />
            <div>
                {errors?.name?.message}
            </div>
           
           
            <button type="submit">Registrar entrada</button>
        </form>
    );
}
 
export default AddUserForm;