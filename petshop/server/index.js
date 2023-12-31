const express = require("express")
const app = express();
const dbService = require('./dbService.js')

//npx nodemon index
const cors = require("cors")

const dotenv = require('dotenv');
const DbService = require("./dbService.js");

dotenv.config() //garante acesso as credenciais do env

app.use(cors())
app.use(express.json())

const db = DbService.getDbServiceInstance();

app.get('/', (request, response) =>{
    response.send("Hello world!")
} );

app.get('/teste', (request, response) =>{
    response.send("endpoint de teste!")
} );

app.get('/buscarClientes', (request, response) =>{
    const result = db.BuscarClientes();
    result.then(data => response.json(data)).catch(err => console.log(err));
})

app.post('/NovoCliente', (request, response) =>{
    const result = db.NovoCliente(request.body);
    result.then(data => response.json(data)).catch(err => console.log(err));
})

app.listen(process.env.BACKENDPORT, () =>{
    console.log("servidor rodando na porta " +  process.env.BACKENDPORT)
});