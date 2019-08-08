import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  async getData(limit): Promise<ITodo[]> {
    return await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
    .then(r => r.json())
    .then(todos => todos.map((td) => {
      return {
        id: td.id,
        status: td.completed,
        text: td.title,
        title: td.reqtitle ? td.reqtitle : `Untitled ${td.id}`
      };
    }));
  }

  async getDataId(id) {
    return await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response => response.json())
    .then(json => console.log(json));
  }

  async createTodo(text, title) {
    return await fetch(`https://jsonplaceholder.typicode.com/todos`, {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: text,
        userId: 1
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(response => response.json())
    .then(json => console.log(json));
  }

  async getDataUpdate(id, title, text) {
    return await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: id,
        title: title,
        body: text,
        userId: 1
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(response => response.json())
    .then(json => console.log(json));
  }

  async deleteTodo(id) {
    return await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(json => console.log(json));
  }


  async getUser(): Promise<IUser[]> {
    return await fetch('https://api.github.com/users?since=135')
    .then(r => r.json())
    .then(user => user.map((td) => {
      console.log(user);
      return {
        name: td.name,
        email: td.email
      };
    }));
  }
}
