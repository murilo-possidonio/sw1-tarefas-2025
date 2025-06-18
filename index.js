const express = require('express');

const app = express();

app.set('view engine', 'hbs');
app.set('views', './views')

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.render('home');
});

app.listen(3000, () => {
    console.log('Servidor executando: porta 3000');
});