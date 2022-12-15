import express  from 'express';
import Connection from './database/db.js';
import defaultData from './defalut.js';

const app = express();
const port = 8000;

Connection();

app.get('/', (req, res) => {
    res.send("This is the response from the server!")
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})

defaultData();