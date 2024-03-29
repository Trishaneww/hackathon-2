import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'


const Closedproject = () => {

  const [projects, setProjects] = useState([])

  // updates project data with the data stored in our db
  useEffect(() => {
    const fetchProjects = async () => {
        try {
            const res = await axios.get("http://localhost:1414/closedprojects")
            console.log(res.data)
            setProjects(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    fetchProjects()
  }, [])

  // Retrieves the id of the selected project
  // Sends a delete request to the server to delete the project table/data that matches this id
  // Window.location.reload() reloads page to re render data
  const handleDelete = async(id) => {
    console.log("hi")
    try {
        await axios.delete(`http://localhost:1414/projects/${id}`)
        window.location.reload();
    } catch(err) {
        console.log(err)
    }
  }

  

  return (
    <>
        <h1>CLOSED PROJECTS</h1>
        {projects.map(project => (
            <div className="project-card" key={project.project_id}>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                {project.task && <h2>{project.title}</h2>}
                <p>{project.status}</p>
                <button onClick={() => handleDelete(project.project_id)}>Delete</button>
                <button><Link to={`/update/${project.project_id}`} > Update </Link></button>
            </div>
        ))}

        <button><Link to="/">HOME</Link></button>

    </>
  )
}

export default Closedproject