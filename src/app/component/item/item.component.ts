import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() todo;
  @Output() delTodo = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  delItem(id) {
    console.log(id);
    this.delTodo.emit(id);
  }

}
