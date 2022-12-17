import express  from 'express';
import Connection from './database/db.js';
import defaultData from './defalut.js';
import Router from './routes/route.js';
import cors from 'cors'
import bodyParser from 'body-parser';

const app = express();
const port = 8000;
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', Router)

Connection();

app.get('/', (req, res) => {
    res.send("This is the response from the server!")
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})

defaultData();