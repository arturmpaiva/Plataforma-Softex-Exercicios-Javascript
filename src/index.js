const express = require('express');
const app = express();
const porta = 3000;

app.listen(porta, function() {
    console.log("Servidor rodando na porta", + porta)
})

app.get('/projects', (request, response) => {
    return response.send('Hello World!')
});