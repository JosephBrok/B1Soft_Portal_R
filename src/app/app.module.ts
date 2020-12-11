import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { PreRegistroComponent } from './pre-registro/pre-registro.component';
=======
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';

>>>>>>> fd9efec369f5a7e54e5c5626c11c1b2b518c3ec0

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    PreRegistroComponent
=======
    TodoListComponent,
    TodoFormComponent,
>>>>>>> fd9efec369f5a7e54e5c5626c11c1b2b518c3ec0
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[TodoFormComponent],
})
export class AppModule { }
