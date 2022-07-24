const app = require("./app");

const dotenv = require("dotenv");

// CONFIG
dotenv.config({path:"backend/config/config.env"})

// CALLBACK FUNCTION
app.listen(process.env.PORT, ()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})