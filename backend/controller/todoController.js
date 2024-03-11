const express = require("express")
const todo = express.Router()
const {getFullList, getOneItem, createTodo, updateOneItem, deleteOneItem} = require("../queries/todoQueries")


function validateTodos (req, res, next){
    const body = req.body
    if(!body.category || !body.task){
        res.status(400).json({payload: "please add category and task"})
    }else{
        next()
    }
    
}
todo.get("/", async(req,res)=>{
try {
    const fullList = await getFullList()
    res.status(200).json({payload: fullList})
} catch (error) {
    res.status(400).json({payload: error})
}
})

todo.get('/:todoId', async(req, res) => {
    const {todoId} = req.params
    try {
      const oneItem = await getOneItem(todoId)
      res.status(200).json({payload: oneItem})  
    } catch (error) {
      res.status(400).json({payload: error})
        
    }
})

todo.post('/', validateTodos, async(req, res) => {

    const body = req.body
    try {
        const createdTodo = await createTodo(body)
        res.status(201).json({payload: createdTodo})
    } catch (error) {
        res.status(400).json({payload: error})
    }
})

todo.put('/:todoId', validateTodos, async(req, res) => {
    const {todoId} = req.params
    const body = req.body
    try {
        const updateTodo = await updateOneItem(todoId, body)
        res.status(201).json({payload: updateTodo})
    } catch (error) {
        res.status(400).json({payload: error})
    }
})

todo.delete('/:todoId', async(req,res) => {
    const {todoId} = req.params
    try {
        const deleteTodo = await deleteOneItem(todoId)
        res.status(201).json({payload: deleteTodo})
    } catch (error) {
        res.status(404).json({payload: error})
    }
})
module.exports = todo