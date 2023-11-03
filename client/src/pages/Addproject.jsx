import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const Addproject = () => {

  const [project, setProject ] = useState({
    title: "",
    description: "",
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProject((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:1414/projects", project)
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }



  return (
    <div>

      <h1>ADD PROJECT</h1>

      <form>
        <input type="text" placeholder="title" onChange={handleChange} name="title" />
        <input type="text" placeholder="description" onChange={handleChange} name="description" />

        <button onClick={handleClick}>ADD</button>
      </form>


    </div>
  )
}

export default Addproject