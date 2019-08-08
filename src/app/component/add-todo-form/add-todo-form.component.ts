import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../../models/todo';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.scss']
})
export class AddTodoFormComponent implements OnInit {
  @Output() newTodo = new EventEmitter<{text: string, title: string}>();
  newTitle = '';
  newText = '';

  constructor() { }

  ngOnInit() {
  }

  addNew(text, title) {
    this.newTodo.emit({text, title});
    this.newText = '';
    this.newTitle = '';
  }

}
