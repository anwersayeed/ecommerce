const mongoose  = require("mongoose");

// After Connecting, we call a call back function // if fails, catch error
mongoose.connect(process.env.DB_URI, {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true}).then((data)=>{
    console.log(`MongoDB Connected with server: ${data.connection.host}`);
}).catch((err)=>{
    console.log(err);
})