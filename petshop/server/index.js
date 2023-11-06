const express = require("express")
const app = express();

//npx nodemon index

app.get('/', (request, response) =>{
    response.send("Hello world!")
} );

app.get('/teste', (request, response) =>{
    response.send("endpoint de teste!")
} );

app.listen(8080, () =>{
    console.log("servidor rodando na porta 8080")
});