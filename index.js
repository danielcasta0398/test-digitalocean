const express = require('express');

const app = express();

app.use( express.json() )

app.get( '/home', ( req,res ) => {
    res.status(200).json({ message: 'Hola mundo desde digitalocean' })
} )

const PORT = 4000;

app.listen( PORT, () => {
    console.log(`Runnig for the port ${PORT}`);
} )