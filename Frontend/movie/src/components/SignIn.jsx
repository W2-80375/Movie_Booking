import React,{useState} from 'react';

import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'; 
import "./signin.css"



function SignIn() {
const navigate = useNavigate();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
// this is the chnage 

const notifyError=(msg)=>toast.error(msg);
const notifySuccess=(msg)=>toast.success(msg);


const postData = () => {
  fetch("http://localhost:4000/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then(data => {
      console.log(data);

      if (data.error) {
        notifyError(data.error);
      } else {
        notifySuccess(data.message);
        console.log(data);
        localStorage.setItem("jwt", data.token);
        navigate("/")
        // navigate(`/profile/${data.user_id}`);
      }
    })
    .catch(error => {
      console.error("Error during fetch:", error);
      notifyError("An error occurred during the login process.");
    });
};



  return (
    <div className='signin'>
      <div className='from-container'>
        <div className='loginForm'>
          
          <div>
            <input type='email' 
            name='email' 
            id='email' 
            placeholder='Enter Your Email' 
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>
          <div>
            <input type='password'
             name='password'
              id='password'
              placeholder='Enter Your Password'
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}} 
              />
          </div>
          <input type='submit'
           id='login'
           onClick={()=>{postData()}}
             />
          <div className='loginform'>
            Don't have account ?
            <Link to='/signup'>
              <span style={{color: "red", cursor:"pointer"}}> SignUp</span>
            </Link>

          </div>
        </div>

      </div>
      
    </div>
  )
}

export default SignIn
