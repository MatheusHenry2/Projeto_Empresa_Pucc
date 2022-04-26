const express = require('express');
const router = express.Router();

const { verificaLoginEmpresa } = require("../database/loginEmpresa");

router.post('/', async(req, res) => {
    const { email_empresa, senha_empresa } = req.body;

    verificaLoginEmpresa(email_empresa, senha_empresa).then(result => {
        res.status(200).send(result);
    }).catch((e) => {
        res.status(400).send(e);
    });

});

module.exports = router;