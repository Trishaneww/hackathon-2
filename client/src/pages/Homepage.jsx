import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import './Homepage.scss'


const Homepage = () => {

  const [projects, setProjects] = useState([])

  // updates project data with the data stored in our db
  useEffect(() => {
    const fetchProjects = async () => {
        try {
            const res = await axios.get("http://localhost:1414/projects")
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

        <h1 className="project-card__heading">ACTIVE PROJECTS</h1>

        <div className="card-container">
        {projects.map(project => (
            <div className="project-card" key={project.project_id}>
                <h2 className="project-card__title">{project.title}</h2>
                <p className="project-card__description">{project.description}</p>
                {project.task && <h2>{project.title}</h2>}

                <div>
                  <button className="project-card__button-delete" onClick={() => handleDelete(project.project_id)}>Delete</button>
                  <Link to={`/update/${project.project_id}`} > <button className="project-card__button-update" > Update </button> </Link>
                </div>

            </div>
        ))}
        </div>

        <Link to="/add"><button className="project-card__button-add" >Add new project </button></Link>

    </>
  )
}

export default Homepage