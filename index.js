import express from "express"
import path from "path"
import dotenv from "dotenv"
import { fileURLToPath } from "url";

const app = express();
const router = express.Router()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const publicPath = path.join(__dirname,"/public")

dotenv.config()
app.use(express.static(publicPath))

app.listen(process.env.PORT,() => {
  console.log("server running on "+process.env.PORT)
})

app.use("/.netlify/functions/api",router)
