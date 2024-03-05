const db = require("../db/dbConfig")

const getFullList = async() => {
    try {
        const fullList = await db.any("SELECT * FROM todos");
        return fullList
    } catch (error) {
        return error
    }
}


module.exports={
    getFullList
}