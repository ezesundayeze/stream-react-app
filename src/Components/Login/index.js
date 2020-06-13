import React, { useState} from 'react'
import spinner from './spinner.gif'
import axios from 'axios'
import './index.css'


const Login = (props) => {

  const [loading, setLoading] = useState(false)
  const [userId, setUserId] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const initStream = async (e) =>{
    e.preventDefault()
    setErrorMessage("")
    setLoading(true);

    if (userId.trim() !== "") {

      await axios.post("http://127.0.0.1:5000/generate-token", {
        headers: {
          'Content-Type': 'application/json'
        },
        user_id: userId

      }).then((response)=>{

        localStorage.setItem("user_id", userId);
        localStorage.setItem("token", response.data.token);
        if (response.data.token) {
          props.history.push("/");
        }
        

      }).catch((err)=>{
        setLoading(false);
        setErrorMessage("Your registration wasn't successful, please, try again.")
        console.log("error", err)
      })
    }
      await setLoading(false);
  }

  const handleUserId = e => {
    setUserId(e.target.value);
    console.log(e.target.value)

  };


  return (
    <div className='container'>
      <form method='post'>
        <h1>
            Sign Up
        </h1>
        <div className='form-content'>
          <input id='user_id' name='user_id' placeholder='Username' type='text' onChange={e => handleUserId(e)} />
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
