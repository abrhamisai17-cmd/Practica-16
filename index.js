const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Estas en la sección inicial');
});

app.get('/inicio', (req, res) => {
  res.send('Estas en la sección de inicio');
});

app.get('/productos', (req, res) => {
  res.send('Estas en la sección de productos');
});

app.get('/servicios', (req, res) => {
  res.send('Estas en la sección de servicios');
});

app.get('/proyectos', (req, res) => {
  res.send('Estas en la sección de proyectos');
});

app.get('/contacto', (req, res) => {
  res.send('Estas en la sección de contacto');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});