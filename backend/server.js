const app = require("./app")
require("dotenv").config()
PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`you are listening to port: ${PORT}`)
})