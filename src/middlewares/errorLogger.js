/**
 * middleware to do effective error logging 
 * @param {ctx object} ctx 
 * @param {next} next 
 */


const errorLogger = async(ctx,next)=>{
    try{
         //pass to next middlewar
         await next();
    }
    catch(error){
        //first log on terminal
         console.error(error);
         const statusCode = ctx.status || 500;
          //log it to client
         ctx.body ={error: {
            statusCode,
            message : error.message
         }}
    }
}

module.exports = errorLogger;