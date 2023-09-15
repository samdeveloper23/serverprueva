const express = require('express');
const server = express();
const puerto = 8000;

// Ruta para decir "Hola"
server.get('/hola', (req, res) => {
    res.send('Hola socio ya esta el servidor montado para ganar verdadera pasta');
});

// Ruta para decir "Adiós"
server.get('/adios', (req, res) => {
    res.send('Adiós');
});

server.listen(puerto, () => {
    console.log(`Escuchando en el puerto: ${puerto}`);
})