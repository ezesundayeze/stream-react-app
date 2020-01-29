import React, { useState} from 'react'
import spinner from './spinner.gif'
import axios from 'axios'
import './index.css'


const Login = (props) => {

  const [loading, setLoading] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const initStream = async (e) =>{
    e.preventDefault()
    setErrorMessage("")
    await setLoading(true);

    await axios.post(process.env.REACT_APP_ENDPOINT, {
      headers: {
        'Content-Type': 'application/json'
      },

      name: {first:firstName, last:lastName},
      password: password,
      email: email

    }).then((response)=>{
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("apiKey", response.data.apiKey);    
      props.history.push("/");
    }).catch((err)=>{
      setLoading(false);
      setErrorMessage("Your registration wasn't successful, please, try again.")
      console.log("error", err)
    })
    await setLoading(false);
  }

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handleFirstName = e => {
    setFirstName(e.target.value);
  };
  const handleLastName = e => {
    setLastName(e.target.value);
  };

  const handlePassword = e => {
    setPassword(e.target.value);
  };


  return (
    <div className='container'>
      <form method='post'>
        <h1>
            Sign Up
        </h1>
        <div className='form-content'>
          <input id='first-name' name='first-name' placeholder='First Name' type='text' onChange={e => handleFirstName(e)} />
          <input id='last-name' name='last-name' placeholder='Last Name' type='text' onChange={e => handleLastName(e)} />
          <input id='email' name='email' placeholder='Email' type='text' onChange={e => handleEmail(e)} />
          <input id='password' name='password' placeholder='Password' type='password' onChange={e => handlePassword(e)}  />

          <br />
          <button className='button' onClick={initStream} type='submit'>
            Submit
          </button>
          <br />
          <div className='signup-message'> {loading && <img alt="Spinner" src={spinner} />}</div>
          <p>{errorMessage}</p>
        </div>
      </form>
    </div>

  )
}


export default Login
