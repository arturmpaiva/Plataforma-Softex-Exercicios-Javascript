const express = require('express');
const app = express();

app.listen(3984);

app.get('projects', (request, response) => {
    console.log('server ok');
    return response.send('Hello World!');
});