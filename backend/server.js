const app = require("./app");

// CALLBACK FUNCTION
app.listen(process.env.PORT, ()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})