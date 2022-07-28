// Here, we have inherited ErrorHandler from Error, which is node's default class
// Super can be understood as the constructor of Error Class
class ErrorHandler extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = ErrorHandler