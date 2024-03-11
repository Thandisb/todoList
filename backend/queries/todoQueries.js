const db = require("../db/dbConfig")

const getFullList = async() => {
    try {
        const fullList = await db.any("SELECT * FROM todos");
        return fullList
    } catch (error) {
        return error
    }
}

const getOneItem = async (todoId) => {
    try {
      const  getOneItem = await db.one("SELECT * FROM todos WHERE id = $1", todoId)
      return getOneItem
    } catch (error) {
        return error
    }


}

const createTodo = async ({category, task}) => {
    try {
        const createdTodo = await db.one("INSERT INTO todos(category, task) VALUES ($1, $2) RETURNING *", [category, task])
        return createdTodo
    } catch (error) {
        return error
        
    }
}

const updateOneItem = async (id, body) => {
    const {category, task} = body
    try {
       const updateTodo = await db.one('UPDATE todos SET category = $1, task = $2 WHERE id = $3 RETURNING *', [category, task, id])
       return updateTodo 
    } catch (error) {
        return error
    }
}

const deleteOneItem = async (id) => {
    try {
        const deleteTodo = await db.one('DELETE FROM todos WHERE id = $1 RETURNING *',id)
        return deleteTodo
    } catch (error) {
        return error
    }
}

module.exports={
    getFullList,
    getOneItem,
    createTodo,
    updateOneItem,
    deleteOneItem
}