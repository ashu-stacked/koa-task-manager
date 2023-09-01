const User = require('../models/User');
const bcrypt = require('bcrypt');
const {Op} = require('sequelize')

const signUp = async (ctx)=>{
   // username,password,email in req body -> i will check username/email fields exist in db or not -> if yes then 409 else i will create a user with username and password and email
   //once user is successfully created then i will send response the user object and also send a welcome mail to the user email
  try{
  const {userName,userEmail,userPassword} = ctx.request.body;
  const user = await User.findOne({
    where: {
      [Op.or]: [
        { userName: userName },
        { userEmail: userEmail }
      ]
    }
  });

  if(user){
    ctx.status=409;
    // ctx.body={error:'User already exists with this username or email.'}
    throw new Error('User already exists with this username or email')
  }

 try {
    //hashing password before stoarge in DB
   const saltRounds = 10;
   const hashedPassword = await bcrypt.hash(userPassword, saltRounds);
   const newUser = await User.create({
     userName: userName,
     userEmail: userEmail,
     userPassword: hashedPassword
   });

   ctx.body = {
     message: 'User created successfully',
     user: {
       userName: newUser.userName,
       userEmail: newUser.userEmail
     }
   };
 } catch (error) {
   throw error;
 }
}

catch(error){
  throw error;
}
}

module.exports = {signUp}