const User = require('../models/User.model')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')
const jwt = require("jsonwebtoken")
 
exports.createUser = async (req, res) => {

    // Check for errors
    const error = validationResult(req)
    
    if(!error.isEmpty()){
        return res.status(400).json(
            {errores: error.array()}
        ) 
    }

    // EXTRACT EMAIL AND PASSWORD
    const { email, password } = req.body
    console.log(req.body)
    try {
        // Check that the registered user is unique
        let user = await User.findOne({email})
        
        if(user){
            return res.status(400).json({message: "User already exists" })
        }
        
        // save the new user
        user = new User(req.body)
        console.log("Linea 33:", user)

        // Hashear el password
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password, salt)
        console.log("Línea 39", user)

        // Save user
        await user.save()

        // CREATE JWT
        const payload = {
            user: {
                id: user.id 
            }
        }

        // SIGN JWT
        jwt.sign(
            payload,
            process.env.SECRETA,
            {
                expiresIn: 360000 // 
            },
            (error, token) => { 

            if(error) throw error

            res.json(
                {
                    token
                }
            ) 
        })

    } catch(error){
        console.log(error)
        res.status(400).send("There was an error") 
    }
}

exports.getProfile = async (req, res) => {
    const { _id } = req.user
    const profile = await User.findById(_id).populate('orders')
    res.json({ profile })
}
   
exports.editProfile = async (req, res) => {
    const { _id } = req.user
    const profile = await User.findByIdAndUpdate(_id, { $set: { ...req.body } }, { new: true })
    res.json({ profile })
}
   
exports.deleteProfile = async (req, res) => {
    const { _id } = req.user
    const profile = await User.findByIdAndDelete(_id)
    res.json({ profile })
}