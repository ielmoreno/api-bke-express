import express from 'express'
import authRouter from './routers/authRouter.js'
import accountRouter from './routers/accountRouter.js'
import userRouter from "./routers/userRouter.js"
import prodsRouter from "./routers/prodsRouter.js"
import { ENVIRONMENT, PORT, HOST } from './config.js'

const app = express()

//converte o que vem do body para objeto
app.use(express.json())

app.get('/', (req, res) => {res.json({message: "Bem-vindo a API!"})})

app.use('/user', userRouter)
app.use('/prods', prodsRouter)
app.use('/auth', authRouter)
app.use('/account', accountRouter)

app.listen(PORT, () => {
    console.log(`Servidor Rodando no ambiente ${ENVIRONMENT} em ${ ENVIRONMENT == 'production' ? HOST : HOST+':'+PORT }`)
})