import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import * as db from './db';
import routes from './routes';

let PORT = 8765;
const app = express();

app.set('port', PORT);
db.connectClient();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.json({
    title: 'Welcome to the TODO API'
  });
});

app.use('/api', routes);

app.listen(app.get('port'), () => {
  console.log(`PORT: ${app.get('port')}`);
});
