 import Jwt  from "jsonwebtoken";
 import createError from "../utils/CreateErrors.js";
 export const verifyToken=(req,res,next)=>{
      const token = req.cookies.accessToken;
    console.log("this is the token ", token)
    if(!token) return next(createError(401,"you are not authenticated"))
    Jwt.verify(token,process.env.JWT_KEY, async (err,payload)=>{
       if(err) return next(createError(403,"Token is not valid!"))
      req.userId=payload.id;
      req.isSeller=payload.isSeller;
      next();
    })
   
}