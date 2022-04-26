const express = require('express');
const router = express.Router();

const { verificaLoginUsuario } = require("../database/loginUsuario");

router.post('/', async(req, res) => {
    const { email_usuario, senha_usuario } = req.body;

    verificaLoginUsuario(email_usuario, senha_usuario).then(result => {
        res.status(200).send(result);
    }).catch((e) => {
        res.status(400).send(e);
    });

});

module.exports = router;