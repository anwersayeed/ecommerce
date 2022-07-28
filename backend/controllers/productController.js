const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");

// Create Product -- Admin
exports.createProduct = async (req, res, next) =>{

    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })

}

// Get All Products
exports.getAllProducts = async (req, res)=>{

    const products = await Product.find();

    res.status(200).json({
        success:true,
        products
    })
}

// Get Single Products or Get Product Details // why next? : error Handling, callback function 
exports.getProductDetails = async (req, res, next)=>{

    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found", 404));
    }

    await product.remove();

    res.status(200).json({
        screen:true,
        product
    })
}

// Update Product -- Admin
exports.updateProduct = async (req, res, next)=>{

    let product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product Not Found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        screen:true,
        product
    })
}

// Delete Product
exports.deleteProduct = async (req, res, next)=>{

    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product Not Found"
        })
    }

    await product.remove();

    res.status(200).json({
        screen:true,
        message:"Product Deleted Succesfully"
    })
}