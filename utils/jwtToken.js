//create token and saving in cookie
//created token has to be send in cookie so that it get in frontend
import dotenv from 'dotenv';
const sendToken=(user,statusCode,res)=>{

     const token = user.getJWTToken();
      // console.log("token",token);
     //options for cookies
     const options = {
       expires: Date.now() + '5d' * 24 * 60 * 60 * 1000,  //converting 5d in millisec
       httpOnly: true,
     };


    //  document.cookie=token;
      console.log("token send");
     res.status(statusCode).cookie("token",token,options).json({
        sucess: true,
        message: "Token sent!",
        user,
        token,
     })



}
export default sendToken;