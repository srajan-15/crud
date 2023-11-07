import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const Read = () => {
  let [emp, setEmp] = useState([])


  let getApi = async () => {
    let {data} = await axios.get("http://localhost:5000/employee");
    // console.log(data);
    setEmp(data)
  }

  console.log(emp);

  useEffect(() => {
    getApi()
  }, [])
  
  let deleteItem = (id) => {
    axios.delete("http://localhost:5000/employee/" + id);
    window.location.assign("/view");
  }
  
  return (
      <>
          <Header />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {emp.map((x, ind) => {
            return (
              <tr key={ind}>
                <td>{x.id}</td>
                <td>{x.name}</td>
                <td>{x.email}</td>
                <button onClick={() => deleteItem(x.id)}>Delete</button>
                <button>
                  <NavLink to={`/update/${x.id}`}>Update</NavLink>
                </button>
                <button>
                  <NavLink to={`/viewemp/${x.id}`}>View Emp</NavLink>
                </button>
              </tr>
            );
          })}
        </tbody>
        </table>
      </>
  )
}

export default Read