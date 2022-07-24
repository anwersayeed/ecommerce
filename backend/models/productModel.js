const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please enter product name"], // here, you can only write true as well
        trim:true // here, trim means "  hello  " or " hello" will be saved as "hello"
    },
    description:{
        type:String,
        required:[true, "Please enter product description"]
    },
    price:{
        type:Number,
        required:[true, "Please enter product Price"],
        maxLength:[8, "Price Cannot exceed 8 characters"]
    },
    rating:{
        type:Number,
        default:0
    },
    // whenver we upload images on cloud, we receive public_id and url // and below we will have array of images // multiple images for a single product as in showcase
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    // we can use enum to specify categories that we make available // we can also let be be anything that is not preferrable // but leave it, we will set it in the frontend
    category:{
        type:String,
        required:[true, "Please enter product category"],
    },
    Stock:{
        type:Number,
        required:[true, "Please enter product Stock"],
        maxLength:[4, "Stock Cannot exceed 4 characters"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Product", productSchema);