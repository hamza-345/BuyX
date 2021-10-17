const app = require("./app")
const mongoose = require("mongoose")
require('dotenv').config()
mongoose.connect(process.env.MONGODB_URI).then(console.log("connected to database"))

app.listen(process.env.PORT, () => {
    console.log(`Server Running on port: ${process.env.PORT}`)
})