import express from 'express' //importa o express para o server
import routes from './routes/index.js'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000 //porta definida para 3000 caso o process.env.PORT não encontre uma alternativa

app.use(express.json())
app.use(cors())//cors sem nada libera chamadas de qualquer endereço, arriscado pois libera qualquer domínio por isso colocar as urls autorizadas.

app.use('/api', routes)//busca o server e cai em index.js, que reorienta para puxar do banco de dados e devolver os produtos em formato json

//imputa no console npm start a mensagem em console.log
app.listen(PORT, () => {
    console.log(`O servidor está executando em http://localhost:${PORT}`)
})