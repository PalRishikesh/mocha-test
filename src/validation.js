const Joi = require("joi");
const jwt = require("jsonwebtoken");
require('dotenv-flow').config();


const registerValidation=(data)=>{
    const schema= Joi.object({
        name:Joi.string().min(1).max(20).required(),
        email:Joi.string().email().required(),
        password:Joi.string().min(1).max(20).required(),
    })

    return schema.validate(data);
}

const loginValidate=(data)=>{
    const schema = Joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().required()
    })

    return schema.validate(data);
}

const verifyToken = (req,res,next)=>{
    const token = req.header("auth-token");

    if(!token) return res.status(401).json({error:'Access Denied'})
    try {
        
        const verified = jwt.verify(tokne,process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        return res.status(400).json({error:'Token is not valid'})
    }
}


module.exports={
    registerValidation,
    loginValidate,
    verifyToken
}




 