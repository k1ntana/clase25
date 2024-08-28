import React, { useState } from 'react'
import { useNavigate, useRoutes } from 'react-router-dom'
import { users } from '../../Data/usersData'

const Login = () => {
    const initialState = {username: "", password: ""}
    const initialStateErrors = {
        username: [],
        password: [],
        global: []

    }
    const [loginForm, setLoginForm] = useState(initialState)
    const [errors, setErrors] = useState(initialStateErrors)
    const handleChangeValue = (e) => {
        setLoginForm({...loginForm, [e.target.name] : e.target.value})
    }
    
    const validateLength = (value, length) =>{
        return value < length
    }

    const validateUsernameLength = (value) =>{
        return value > 3
    }

    const ERRORS = {
        USERNAME_LENGTH: {text: 'tu nombre de usuario debe tener más de 10 carácteres', id:1,validate: validateUsernameLength},
        USER_NOT_FOUND: {text: 'Credenciales invalidas'}, id:2

    }
    
    
    const findError = (from,id_error) => {
        return errors[from].find(error => error.id == id_error)
    }

        /**
     * Valida un error dado un origen Ejemplo: username | password y un objeto de error
     *
     * @param {string} from - El origen de donde proviene el error username | password)
     * @param {object} errorToValidate - El objeto de error a validar. esto viene del objeto ERRORS
     * @return {void}
     */

    const validateError = (from,errorToValidate) =>{
        if(findError(from,errorToValidate.id)){

            if(errorToValidate.validate(loginForm[from])){
                const newUsernameErrors = errors[from].filter(error => error.id != errorToValidate)
                setErrors({...errors, [from] : [...errors.username, newUsernameErrors]})
            }
        }
        else {
            if(!errorToValidate(loginForm[from])){
                setErrors({...errors, [from] : [...errors[from], errorToValidate]})
            }
        }
    
    }

    const handleBlurtInput = () =>{
        console.log(loginForm)
        console.log(errors)
        validateError('username', ERRORS.USERNAME_LENGTH)
        
    }
    
    const navigate = useNavigate()

    const handleLogin = (e) =>{
        e.preventDefault
        for(const user of users){
            if(user.password === loginForm.password && user.username === loginForm.username){
                localStorage.setItem('user', JSON.stringify(user))
                return navigate('/')
            }
        }
        setErrors({...errors, global: [ERRORS.USER_NOT_FOUND]})
    }

  return (
    <main>
        <h1>Iniciar Sesion</h1>
        <form onSubmit={handleLogin}>
            <div>
                <label htmlFor="username">Nombre de usuario</label>
                <input type="username" placeholder='joedoe' id='username' name='username' onChange={handleChangeValue} value={loginForm.username} onBlur={handleBlurtInput}/>
                {
                    errors.username.length > 0 &&
                    errors.username.map((error,index) => <span key={index}>{error.text}</span>)
                }
            </div>
            <div>
                <label htmlFor="password">Contraseña</label>
                <input type="password" placeholder='joedoe123' id='password' name='password' onChange={handleChangeValue} value={loginForm.password}/>
                
            </div>
            {
                errors.global.map((error) => (<span key={error.id}>{error.text}</span>))
            }
            <button type='submit'>Enviar</button>
        </form>
    </main>
  )
}

export default Login