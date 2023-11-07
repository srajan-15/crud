import React, { useState } from 'react'
import Header from './Header'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  let [emp, setEmp] = useState({
    name: "",
    email:""
  })

  let { name, email } = emp;

  let navigate=useNavigate()

  let handlechange = (e) => {
    console.log(e);
    let { name, value } = e.target;
    setEmp({...emp,[name]:value})
  }

  let handleSubmit = (e) => {
    e.preventDefault()
    console.log(emp);
    try {
      let payload = { name, email }
      axios.post("http://localhost:5000/employee", payload);
      navigate("/view");
      
    } catch (error) {
      console.log(error);
    } finally {
      setEmp({
        name: "",
        email:""
      })
    }
  }

  return (
    <>
      <Header/>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder='enter your name' value={name} name='name' onChange={handlechange}/>
        </div>
        <div>
          <input type="email" placeholder='enter your email' value={email} name='email' onChange={handlechange}/>
        </div>
        <div>
          <button>ADD</button>
        </div>
      </form>
    </>
  )
}

export default Create