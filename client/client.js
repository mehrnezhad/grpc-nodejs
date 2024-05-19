import express from "express"
import {config} from "dotenv"
import router from "./index.route.js"
import swaggerCongif from "./config/swagger.config.js"

const app = express()
config()
swaggerCongif(app)
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)
app.listen(process.env.PORT,()=>{
console.log(`Server is running on port: ${process.env.PORT}`)
})