// import express, mysql, and nodemon in terminal
import express from "express"
import mysql from "mysql"
import cors from "cors";

const app = express()

app.use(express.json())
app.use(cors())

// enter your s=mysql password in the empty string
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"testdata"
})

app.get("/", (req, res) => {
    res.send("DEFAULT")
})

// sends query to db to retrieve all projects in project database
app.get("/projects", (req, res) => {
    const q = "SELECT * FROM projects"
    db.query(q, (err, data) => {
        if(err) return res.send(err)
        return res.send(data)
    })
})
// sends query to db to add a row of data to project db, using req.body params 
app.post("/projects", (req,res) => {
    const q = "INSERT INTO projects (`title`, `description`, `todolist_id`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.description,
        req.body.todolist_id,
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("PROJECT CREATED SUCCESFULLY")
    })   
})

// sends query to db to delete row that matches the provided PRIMARY ID
app.delete("/projects/:id", (req,res) => {
    const projectId = req.params.id;
    const q = "DELETE FROM projects WHERE project_id = ?"

    db.query(q, [projectId], (err,data) => {
        if (err) return res.json(err);
        return res.json("PROJECT SUCCESFULY DELETED")
    })
})

// sends query to db to update a row of data in project db that matches provided ID, using req.body params 
app.put("/projects/:id", (req,res) => {
    const projectId = req.params.id;
    const q = "UPDATE projects SET `title` = ?, `description` = ? WHERE project_id = ?";
    const values = [
        req.body.title,
        req.body.description,
    ];

    db.query(q, [...values, projectId], (err,data) => {
        if (err) return res.json(err);
        return res.json("PROJECT SUCCESFULY UPDATED")
    })
})


app.listen(1414, () => {
    console.log("Listening on port 1414!")
})
