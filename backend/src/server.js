const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

// cria o servidor com a função do express
const server = express();

mongoose.connect(
    'mongodb+srv://caiqueribeiro:caiqueribeiro@cluster0-xhvf1.mongodb.net/omnistack?retryWrites=true&w=majority',{
    useNewUrlParser: true
});

// Para receber requisições cross-platform
server.use(cors());
// para entender requisições com corpo JSON
server.use(express.json());
// para usar as rotas definidas
server.use(routes);

// faz ouvir a porta 3333
server.listen(3333);