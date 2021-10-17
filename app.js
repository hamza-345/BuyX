const express = require("express")
const app = express()
const routes = require("./routes/productRoutes")
const morgan = require("morgan")
const error = require("./utils/error")
var cors = require('cors')

app.use(cors())
app.use(morgan('tiny'))
app.use("/uploads", express.static(__dirname));
app.use("/api", routes)


app.use(error.unknownEndpoint)
app.use(error.errorHandler)
module.exports = app