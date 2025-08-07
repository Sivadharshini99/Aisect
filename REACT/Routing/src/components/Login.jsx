import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Login = () => {
    // let newObj=useParams();
    // console.log(newObj);
    let {user}=useParams();//destructing var.name
   let navigate= useNavigate();//Hooks--should be outside function
    let handleNavigate=()=>{
        navigate('/');
    }
  return (
    <div>
      <p>Login-{user}</p>
      <button onClick={handleNavigate}>Move to Home</button>
    </div>
  )
}

export default Login
