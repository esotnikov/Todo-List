import { Component, OnInit } from '@angular/core';
import { ITodo } from './models/todo';
import { IUser } from './models/user';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'toDoList';
  todosArray: ITodo[] = [];
  newTitle = '';
  newText = '';
  user: IUser[];

  constructor(private serviceName: TodoService) {}

  ngOnInit() {
    // this.getData();
    this.serviceName.getData(10).then((res) => {
      this.todosArray = res;
    });

    this.updateTodo(1, 'text', 'title');
    this.getTodoId(34);
  }


  addNew(data) {
    const newItem = {
      id: Math.random(),
      status: false,
      text: data.text,
      title: data.title
    };
    this.todosArray.unshift(newItem);
    this.serviceName.createTodo(data.text, data.title);
  }

  updateTodo(id, title, text) {
    this.serviceName.getDataUpdate(id, title, text);
  }

  getTodoId(id) {
    this.serviceName.getDataId(id);
  }

  // getData() {
  //   fetch('https://jsonplaceholder.typicode.com/todos?limit=10')
  //     .then(response => response.json())
  //     .then(todos => todos.map((td) => {
  //       return {
  //         id: td.id,
  //         status: td.completed,
  //         text: td.title,
  //         title: td.reqtitle ? td.reqtitle : `Untitled ${td.id}`
  //       };
  //     }))
  //     .then(todos => {
  //       todos.length = 10;
  //       return todos;
  //     })
  //     .then(todos => {
  //       this.todosArray = todos;
  //     });
  // }
}
