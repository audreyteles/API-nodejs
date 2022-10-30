const express = require("express");
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: "Retorna todos os produtos"
    })
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "O produto foi adicionado"
    })
});

router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto

    res.status(200).send({
        mensagem: "Detalhes do produto",
        id: id
    })

});

router.patch('/:id_produto', (req, res, next) => {
    res.status(201).send({
        mensagem: "Produto alterado",
    })
});

router.delete("/:id_produto", (req, res, next) => {
    res.status(201).send({
        mensagem: "Produto excluído"
    })
})
module.exports = router;