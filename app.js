const express = require('express');
const consign = require('consign');
const app = express();
const port = 3000;

consign().include('routes').into(app);

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port port!`));