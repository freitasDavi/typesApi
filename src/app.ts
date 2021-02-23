import express from 'express';
import * as bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json({
    limit: '50mb',
    verify(req: any, res, buf, encoding) {
        req.rawBody = buf;
    }
}));

app.get('/', (req, res) => res.send('Hello folks'));

export {app};

//https://medium.com/swlh/how-to-rest-api-a-tale-of-node-js-express-and-typescript-77bc598b280c
