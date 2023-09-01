
const jwt = require('jsonwebtoken');
const jwtGenerator = (payload)=>{
  try{
    const jwtKey ="Yjk5NTQ5ODc2ODYxZDc5ZjU3MDdhMWY1NWFlYTdiNzk=";
    const jwtExpirySeconds = 300;
    const token = jwt.sign(payload , jwtKey, {
		algorithm: "HS256",
		expiresIn: jwtExpirySeconds,
	})
  return token;
  }
  catch(error){
    console.error(error)
  }

}

module.exports = jwtGenerator;