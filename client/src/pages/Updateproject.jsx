import React from 'react'
import { useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom"
import axios from 'axios'

const Updateproject = () => {

  const [project, setProject ] = useState({
    title: "",
    description: "",
  })

  const navigate = useNavigate();
  const location = useLocation()


  // Splits path name into an array of 3, retreives last index (id path)
  const id = location.pathname.split("/")[2]

  const handleChange = (e) => {
    setProject((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async (e) => {
    
    e.preventDefault()
    try {
      await axios.put(`http://localhost:1414/projects/${id}`, project)
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>

      <h1>UPDATE PROJECT</h1>

      <form>
        <input type="text" placeholder="title" onChange={handleChange} name="title" />
        <input type="text" placeholder="description" onChange={handleChange} name="description" />
        <button onClick={handleClick}>UPDATE</button>
      </form>

    </div>
  )
}

export default Updateproject