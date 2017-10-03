import { Router } from 'express';

import * as todoServices from '../services/Service';
import * as checkName from '../middleware/checkName';

let router = Router();

router.get('/', (request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  todoServices
    .getAllTodos()
    .then(todos =>
      response.json({
        data: todos
      })
    )
    .catch(err => next(err));
});

router.get('/:id', (request, response, next) => {
  const todoId = request.params.id;
  todoServices
    .getTodo(todoId)
    .then(todos => response.json({ data: todos[todoId - 1] }))
    .catch(err => next(err));
});

router.post('/', checkName.checkName, (request, response, next) => {
  console.log(request.body);
  todoServices
    .createNew(request.body)
    .then(data => response.json({ data }))
    .catch(err => next(err));
});

router.delete('/:id', (request, response, next) => {
  const todoId = request.params.id;
  todoServices
    .remove(todoId)
    .then(todos => response.json({ data: todos[todoId - 1] }))
    .catch(err => next(err));
});

router.put('/:id', checkName.checkName, (request, response, next) => {
  const todoId = request.params.id;
  todoServices
    .update(todoId, request.body)
    .then(data => response.json({ data }))
    .catch(err => next(err));
});

export default router;
