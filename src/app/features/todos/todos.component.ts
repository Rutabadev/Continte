import { TodosService } from './todos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  providers: [TodosService]
})
export class TodosComponent implements OnInit {
  tasks: any[];
  todosService: TodosService;

  constructor(todosService: TodosService) {
    this.todosService = todosService;
  }

  ngOnInit() {
    this.todosService.getAllTasks().subscribe(tasks => {
        this.tasks = tasks;
      }
    );
  }

}
