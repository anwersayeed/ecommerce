const mongoose  = require("mongoose");

// After Connecting, we call a call back function // if fails, catch error
mongoose.connect("mongo://localhost:27017/ecommerce", {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true}).then((data)=>{
    console.log(`MongoDB Connected with server: ${data.connection.host}`);
}).catch((err)=>{
    console.log(err);
})