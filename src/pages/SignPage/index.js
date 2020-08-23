import React, { useState} from 'react'
import { useHistory } from "react-router-dom";
import './index.css'
import {useUser} from '../../context/UserContext';

export const SignPage = () => {

  const [login, setLogin] = useState('')
  const [pass, setPass] = useState('')
  const [disabled, setDisabled] = useState(true)
  const contextData = useUser()
  const history = useHistory();

  const validateControl = val => {
    if (val.match(/[a-z]/g) 
      && val.match(/[0-9]/g) 
      && val.length >= 8)
      setDisabled(false)
  }

  const submitHandler = (event) => {
    event.preventDefault();

    fetch(`https://api.github.com/users/${login}`)
      .then(response => response.json())
      .then(data => {
        data.login && contextData.getData(login, data.avatar_url) 
        history.push("/terminals");
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const changePass = e => {
    let val = e.target.value
    setPass(val)
    validateControl(val)
  }

  

  return (
    <div className="login-page">
      <div className="form">
        <h2>Sign in</h2>
        <form className="login-form" onSubmit = {submitHandler}>
          <input 
            type="text" 
            placeholder="Your github username" 
            value = {login}
            onChange = {e => setLogin(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="Password"
            value = {pass}
            onChange = {changePass}
            required
          />
          <button disabled={disabled}>Sign in</button>
        </form>
      </div>
    </div>
  )
}