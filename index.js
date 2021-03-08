const express = require('express')
const connectDB = require('./config/db.config')
const cors = require("cors")

const userRoutes = require('./routes/user.routes')

// CREAR SERVIDOR
const app = express()

// Connect to data base
connectDB()

// MIDDLEWARES
// Enable CORS
app.use(cors())

// Enable express.json. Allow data that the user submits.
app.use(express.json({extended:true}))

// APP PORT
const PORT = process.env.PORT || 3001

// Routing
// Import routes
app.use('/api/users', require('./routes/user.routes'))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/order', require('./routes/order.routes'))
app.use('/api/product', require('./routes/product.routes'))
app.use('/api/proyectos', require('./routes/proyectos'))

// DEFINE THE HOME PAGE
app.get('/', (req,res) => {
    res.send("Hello world")
})

// START LA APP
app.listen(PORT, () => {
    console.log("The server is working")
})