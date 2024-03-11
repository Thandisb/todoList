const express = require('express')
const app = express()
const todoController = require('./controller/todoController')

app.use(express.json())
app.use('/todos', todoController)


app.get("/", (req, res)=>{
    res.send("Welcome to Thandi's to-do list")
})

app.get('*', (req, res)=> {
    res.status(404).send("the request you are looking for doesn't exist")

})

module.exports=app