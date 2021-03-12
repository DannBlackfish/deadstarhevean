// RUTAS PARA CREAR USUARIOS
const express   = require('express')
const router    = express.Router()
const auth      = require("../middleware/auth")
const {check}   = require('express-validator')
const {getProfile, editProfile, deleteProfile, changeProfile} = require('../controllers/userController')
const userController = require('../controllers/userController')

// CREATE A USER
// /user
router.post('/', 
    [
        check("name", "The name is required").not().isEmpty(),
        check("email", "Add a valid email").isEmail(),
        check("password", "The password must be a minimum of 6 characters").isLength({min: 6})
    ], 
    userController.createUser
)

router.get("/", (req, res) => {
    res.json({
        message: "new user"
    })
})

router.get('/profile', auth, getProfile)

router.patch('/profile/edit', auth, editProfile)

router.put('/profile/change/:id', auth, changeProfile)

router.delete('/profile/delete', auth, deleteProfile)

module.exports = router