// ES LA CONEXIÓN DE LA BASE DE DATOS
const mongoose = require('mongoose')
require('dotenv').config(
    {path: 'variables.env'}
)

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log("DB Connect")
    } catch(error){
        console.log(error)
        process.exit(1) // Stop app
    }
}

module.exports = connectDB