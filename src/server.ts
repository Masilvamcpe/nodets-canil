import express from "express"
import mustache from "mustache-express"
import path from "path"
import dotenv from "dotenv"
import mainRoutes from "./routes/index"

dotenv.config()

//Servidor
const server = express()

//Template engine
server.set("view engine", "mustache")
server.set("views", path.join(__dirname, "view"))
server.engine("mustache", mustache())

//Pastas públicas estáticas
server.use(express.static(path.join(__dirname, "../public")))

//Routes
server.use(mainRoutes)

server.use((req, res)=>{
    res.send("Página não encontrada!")
})




server.listen(process.env.PORT)