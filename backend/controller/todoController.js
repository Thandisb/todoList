const express = require("express")
const todo = express.Router()
const {getFullList} = require("../queries/todoQueries")

todo.get("/", async(req,res)=>{
try {
    const fullList = await getFullList()
    res.status(200).json({payload: fullList})
} catch (error) {
    res.status(400).json({payload: error})
}
})

module.exports = todo