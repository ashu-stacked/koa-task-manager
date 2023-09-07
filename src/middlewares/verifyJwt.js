const jwt = require('jsonwebtoken');

const verifyJwt = async (ctx,next)=>{
    try{
        const jwtKey = 'Yjk5NTQ5ODc2ODYxZDc5ZjU3MDdhMWY1NWFlYTdiNzk=';
        const authHeader = ctx.headers.authorization;
        const token = authHeader.split(" ")[1]
        if(!token){
            ctx.status = 403;
            throw new Error('You are not authorized to access')
        }
        const decodedPayload = jwt.verify(token,jwtKey);
        ctx.state.user = decodedPayload;
        console.log(ctx.state.user)
    }
    catch(error){
        ctx.status = 403;
        throw new Error('You are not authorized to access')
    }  
    await next(); 
}

module.exports = verifyJwt;