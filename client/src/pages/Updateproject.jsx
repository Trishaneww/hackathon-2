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


  // splits path name into an array of 3, retreives last index (id path)
  const id = location.pathname.split("/")[2]

  const handleChange = (e) => {
    setProject((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }


  // Retrieves the id of the selected project using useNavigation
  // Sends a put request to the server to update the projects table/data that matches this id
  // navigate("/") redirects user to homepage
  const handleClick = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`http://localhost:1414/projects/${id}`, project)
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  // const handleComplete = async(e) => {
  //   e.preventDefault()
  //   console.log("hi")
  //   try {
  //       await axios.put(`http://localhost:1414/projects/update/${id}`)
  //       window.location.reload();
  //   } catch(err) {
  //       console.log(err)
  //   }
  // }


  return (
    <div>

      <h1>UPDATE PROJECT</h1>

      <form>
        <input type="text" placeholder="title" onChange={handleChange} name="title" />
        <input type="text" placeholder="description" onChange={handleChange} name="description" />
        <input type="text" placeholder="status" onChange={handleChange} name="status" />
        <button onClick={handleClick}>UPDATE</button>
        {/* <button onClick={handleComplete}>COMPLETED</button> */}
      </form>

    </div>
  )
}

export default Updateproject