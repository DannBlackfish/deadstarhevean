// Rutas para autenticar usuarios
const express = require('express')
const router = express.Router()

const { check } = require('express-validator')
const authController = require('../controllers/authController')
const auth = require('../middleware/auth')

// Login
// api/auth
router.post('/', 
        [
            check("email", "Add a valid email").isEmail(),
            check("password", "The password must be a minimum of 6 characters").isLength({min: 6})
        ], 
        authController.authUser
    )

router.get('/', 
        auth,
        authController.userAuth
)

module.exports =  router