const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('my name is Tamara and a am a Devops Engineer'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
