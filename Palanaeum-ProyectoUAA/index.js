const express = require("express");
const bodyParser = require("body-parser");

const app = express(); //Crea el servidor
const port=process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Servidor en ejecucion en http://localhost:${port}`);
});

