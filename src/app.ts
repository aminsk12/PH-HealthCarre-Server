import express, { Application, Request, Response } from "express"
import cors from 'cors'
const app: Application = express();
const port = 5000;

app.use(cors());

app.get('/', (req: Request, res:Response)=>{
    // console.log()
    res.send({
        Message: "ph helth care server..."
    })
})

export default app