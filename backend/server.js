const app = require("./app");
const dotenv = require("dotenv");

const connectDatabase = require("./config/database")

// CONFIG
dotenv.config({path:"backend/config/config.env"})

// Connecting to databse // this is kept below the config setup above, as it will be used in the below code
connectDatabase()


// CALLBACK FUNCTION
app.listen(process.env.PORT, ()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})