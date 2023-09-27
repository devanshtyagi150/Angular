import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularApp';
  todolist = ["Brush your teeth","Attend College","Do homework"];
  public items:string[] = [];
 
  public newTask:string = "";

  public addToList() {
      if (this.newTask == '') {
      }
      else {
          this.items.push(this.newTask);
          this.newTask = '';
            }
  }
  
  public deleteTask(index : number) {
      this.items.splice(index, 1);
    }
}

