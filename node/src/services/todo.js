import * as todoDao from '../dao/todos';

export function getAll(complete){
	return todoDao.getAll(complete);
}

export function getTodo(todoId){
  return todoDao.fetchTodo(todoId);
}

export function createNew(todo){
  return todoDao.createNew(todo);
}

export function remove(todoId){
  return todoDao.remove(todoId);
}

export function update(todoId, todo){
  return todoDao.update(todoId, todo);
}