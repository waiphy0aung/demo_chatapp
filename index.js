import express from "express"
import path from "path"
import dotenv from "dotenv"
import { fileURLToPath } from "url";
import http from "http"
import { Server } from "socket.io"

const app = express();
const router = express.Router()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const publicPath = path.join(__dirname, "/public")

dotenv.config()
app.use(express.static(publicPath))
const server = http.createServer(app)
const io = new Server(server)

io.on("connection", (socket) => {
  console.log("A new user just connected")
  socket.on("disconnect", () => {
    console.log("User was disconnected")
  })
})


server.listen(process.env.PORT, () => {
  console.log("server running on " + process.env.PORT)
})

app.use("/.netlify/functions/api", router)
