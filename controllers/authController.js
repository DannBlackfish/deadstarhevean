const User = require('../models/User.model')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')
const jwt = require("jsonwebtoken")

exports.authUser = async (req,res, next) => {
    
    // Check errors
    const error = validationResult(req)
    console.log(error)

    if(!error.isEmpty()){
        return res.status(400).json({errores: error.array()}) 
    }
    
    // Extract email and password
    const {email, password} = req.body

    try{
        // Check that you are a registered user
        let user = await User.findOne({email})
        console.log("getting user:", user)

        if(!user){
            return res.status(400).json({message: "Username does not exist"})
        }

        // Check password    
        const correctPassword = await bcrypt.compare(password, user.password)
        
        if(!correctPassword){
            return await res.status(400).json({msg: "Wrong Password"})
        }

        // If everything is correct, create JSON WEB TOKEN
        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, process.env.SECRETA, {
            expiresIn: 3600
        }, (error, token) => {
            if(error) throw error;

            // CONFIRMATION MESSAGE
            console.log(token)
            res.json({token})
        })


    }  catch (error) {
        console.log(error)
    }
}

// Get which user is authenticated
exports.userAuth = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')
        console.log("user:", user)
        res.json({user})
    } catch(error){
        console.log(error)
        res.status(500).json({msg: "There was an error"})
    }
}