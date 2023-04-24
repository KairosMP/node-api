require('dotenv').config();
const express = require('express');

const routes = require('./routes');
const connectToDataBase = require('./database');
const cors = require('cors');

connectToDataBase();

const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`⚡ Backend started at http://localhost:${port}`);
});

// * Get: buscar uma informação
// * Post: criar uma informação
// * Put: editar uma informação por completo
// * Patch: modificar apenas uma parte da informação
// * Delete: deletar uma informação
