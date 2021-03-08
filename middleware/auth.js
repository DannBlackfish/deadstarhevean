const jwt = require('jsonwebtoken')

module.exports = function(req,res,next){
    // Read the header token
    const token = req.header('x-auth-token')

    // Check if there is no token
    if (!token) {
        return res.status(401).json({messgage: "No token, invalid permission"})
    }

    // Validate the token
    try {
        const encryption = jwt.verify(token, process.env.SECRETA)
        req.user = encryption.user
        next()

    } catch(error){
        res.status(401).json({message: "Invalid token"})
    }
}