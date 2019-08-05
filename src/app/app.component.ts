import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'toDoList';
  todosArray = [];
  newTitle = '';
  newText = '';

  ngOnInit() {
    this.getData();
  }

  addNew() {
    const newItem = {
      id: Math.random(),
      status: false,
      text: this.newText,
      title: this.newTitle
    };
    this.todosArray.unshift(newItem);
    this.newText = '';
    this.newTitle = '';
  }

  delItem(text) {
    const index = this.todosArray
      .findIndex(el => el.text === text);
    this.todosArray.splice(index, 1);
  }

  getData() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todos => todos.map((td) => {
        return {
          id: td.id,
          status: td.completed,
          text: td.title,
          title: td.reqtitle ? td.reqtitle : `Untitled ${td.id}`
        };
      }))
      .then(todos => {
        todos.length = 10;
        return todos;
      })
      .then(todos => {
        this.todosArray = todos;
      });
  }
}
