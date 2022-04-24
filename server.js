const express = require("express")
const app = express();
const cors = require('cors');

const rotaEmpresa = require('./routes/empresa');
const rotaUsuario = require('./routes/usuario');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors('*'));

app.use("/empresa", rotaEmpresa)
app.use("/usuario", rotaUsuario)

const PORT = process.env.PORT || 8081;
app.listen(PORT, function() {
    console.log("Server has started!")
});