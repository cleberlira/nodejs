const express = require('express');
const app = express();

app.get('/', async(req, res) => {
   res.send("Página inicial do projeto Payroll - Inovar para Pessoas Negras");
});

app.listen(8080, () => {
   console.log("Servidor iniciado na porta 8080 : http://localhost:8080");
});
