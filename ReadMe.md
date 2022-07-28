- Upto this stage, we were handling errors using if and else, but as code size grows, we can't just increase the number of if and else
    instead, we will create a class for error handling so that all backend errors will be handles by this and we will require a single line to handle error rather than if and else

- with every async, use try catch blow : good practice, we can create an error handler for this as well

- At this point, if we hit this post request : http://localhost:4000/api/v1/product/new
    If we post all product information, except name, our server wil go mad, go and try, I am committing at this position, next commit, will fix everything