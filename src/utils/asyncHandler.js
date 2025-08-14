// we are craeting this as we don't want to write all those codes like async await,try,catch when connecting with database. in main folder.
// asyncHandler bss ek method banaega aur usko import kr dega.

//Async Error Wrapper
// Instead of writing try...catch in every controller, you use this helper.
//If the handler throws an error → passes it to Express error handling (next(err))
const asyncHandler = (requestHandler) => {
   return  (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).
        catch((err) => next(err))
    }
}
export {asyncHandler}






/*
YOU CAN USE THIS AS A WRAPPER FUNCTION BUT FOR NOW WE'LL USE ABOVE WRAPPER FUNCTION

const asyncHandler = (fn) => async(req,res,next) => {
    try {
        await fn(req,res,next)
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}

*/