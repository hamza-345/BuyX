import express from "express"

import routes from "./routes/productRoutes.js"
import users from "./routes/userRoutes.js"
import morgan from "morgan"
import error from "./utils/error.js"
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
app.use("/uploads", express.static(__dirname));
app.use("/api/users", users)
app.use("/api", routes)


app.use(error.unknownEndpoint)
app.use(error.errorHandler)

export default app;