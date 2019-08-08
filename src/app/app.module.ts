import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListItemComponent } from './component/list-item/list-item.component';
import { ItemComponent } from './component/item/item.component';
import { AddTodoFormComponent } from './component/add-todo-form/add-todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    ItemComponent,
    AddTodoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
