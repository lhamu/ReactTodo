import { getClient } from '../db';

let client = getClient();

export function getAll(completed) {
  return new Promise((resolve, reject) => {
    client
      .query('select * from todo order by id')
      .then(response => {
        console.log(response.rows);
        resolve(response.rows);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function fetchTodo(todoId) {
  return new Promise((resolve, reject) => {
    client
      .query('select * from todo where id=($1)', [todoId])
      .then(response => {
        resolve(response.rows);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function createNew(todo) {
  return new Promise((resolve, reject) => {
    console.log('todo', todo);
    client
      .query('insert into todo (title, iscomplete) values ($1, $2)', [
        todo.title,
        todo.isComplete
      ])
      .then(response => {
        resolve(todo);
      })
      .catch(error => {
        reject(error);
      });
  });
}
export function remove(todoId) {
  console.log(todoId);
  return new Promise((resolve, reject) => {
    client
      .query('delete from todo where id=($1)', [todoId])
      .then(response => {
        resolve(response.rows);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function update(todoId, todo) {
  return new Promise((resolve, reject) => {
    client
      .query('update todo SET title=($1), iscomplete=($2) where id=($3)', [
        todo.title,
        todo.isComplete,
        todoId
      ])
      .then(response => {
        resolve(todo);
      })
      .catch(error => {
        reject(error);
      });
  });
}
