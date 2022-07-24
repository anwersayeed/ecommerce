const mongoose  = require("mongoose");

const connectDatabase = ()=>{
    // After Connecting, we call a call back function // if fails, catch error
    mongoose.connect(process.env.DB_URI, {useNewUrlParser:true, useUnifiedTopology:true}).then((data)=>{
        console.log(`MongoDB Connected with server: ${data.connection.host}`);
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports = connectDatabase