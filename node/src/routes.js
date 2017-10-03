import { Router } from 'express';

import controller from './controllers/controller';

let routes = Router();

routes.get('/', (request, response) => {
  res.json({
    message: 'Welcome to api',
    instruction: '/todos to enter todo list'
  });
});

routes.use('/todos', controller);

export default routes;
