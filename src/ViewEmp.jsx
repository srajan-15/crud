import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ViewEmp = () => {
    let [emp, setEmp] = useState("")
    
    let { id } = useParams()

    let getApi = async () => {
        let { data } = await axios.get("http://localhost:5000/employee/" + id);
        setEmp(data)
    }
    
    useEffect(() => {
        getApi()
    }, [])

    console.log(emp);
    
  return (
      <>
          <Header />
          <h1>{emp.id}</h1>
          <h1>{emp.name}</h1>
          <h1>{emp.email}</h1>
      </>
  )
}
export default ViewEmp