// Constantes
const express = require('express');
const morgan = require('morgan');

// Instância da lib da API
const app = express();

const rotaProdutos = require("./routes/produtos");
const rotaPedidos = require("./routes/pedidos");

// Semelhante ao modo debug do flask
app.use(morgan('dev'));

// Semelhante às blueprints do flask e as APIRoutes do fastAPI
app.use("/produtos", rotaProdutos);
app.use("/pedidos", rotaPedidos);

app.use((req, res, next) => {
    const erro = new Error("Não encontrado");

    erro.status = 404;
    next(erro);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }

    })
})

// Exportando rota
module.exports = app