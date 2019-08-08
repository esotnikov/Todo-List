import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() todosArray;

  constructor(private serviceName: TodoService) {}

  ngOnInit() {
  }

  delItem(id) {
    this.serviceName.deleteTodo(id);
    // const index = this.todosArray
    //   .findIndex(el => el.text === text);
    // this.todosArray.splice(index, 1);
  }

}
