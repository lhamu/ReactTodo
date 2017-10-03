import { Router } from 'express';

import * as todoServices from '../services/todo';

let router = Router();

router.get('/', (request, response) => {
  todoServices
    .getAll(request.query.isCompleted)
    .then(data => response.json({ data }));
});

router.get('/:id', (request, response) => {
  const todoId = request.params.id;
  todoServices.getTodo(todoId).then(data => response.json({ data }));
});

router.post('/', (request, response) => {
  todoServices.createNew(request.body).then(data => response.json({ data }));
});

router.delete('/:id', (request, response) => {
  const todoId = request.params.id;
  todoServices.remove(todoId).then(data => response.json({ data }));
});

router.put('/:id', (request, response) => {
  const todoId = request.params.id;
  todoServices
    .update(todoId, request.body)
    .then(data => response.json({ data }));
});

export default router;
