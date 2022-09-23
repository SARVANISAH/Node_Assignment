const express = require('express')
const jwt = require('jsonwebtoken')
const route = require('../routes/userRoutes')

const tokenVerify = async (req,res,next)=>{
    try {
        const bearHeader = req.headers['token'];
        
        if(typeof bearHeader !== 'undefined'){
            console.log(bearHeader)
            const verify = await jwt.verify(bearHeader,'secretkey')
            console.log(verify)
            next()
        }
        else{
            res.sendStatus(403)
        }
        
    } catch (error) {
        console.log(error.message)
        res.sendStatus(403);
    }
}

module.exports = {tokenVerify}