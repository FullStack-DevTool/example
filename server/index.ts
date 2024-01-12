import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from "body-parser";
import { logger } from './logger';

dotenv.config({ path: '../.env' })
const app: Express = express()
app.use(cors({
  origin: '*'
}))
app.use(bodyParser.json())
const port = process.env.VITE_API_PORT ?? 8000


app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

app.post('/form', (req: Request, res: Response) => {
  logger.info('Form request received', "Form")
  logger.debug(req.body)
})

setInterval(() => {
  logger.log('Hello from server', "Ping")
}, 20000)

app.listen(port, () => {
  logger.info(`⚡️ Server is running at http://localhost:${port}`)
})
