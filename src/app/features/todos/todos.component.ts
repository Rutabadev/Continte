import { TodosService } from './todos.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Todo } from './todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  providers: [TodosService]
})
export class TodosComponent implements OnInit {
  tasks: any[];
  todosService: TodosService;

  constructor(todosService: TodosService, public dialog: MatDialog) {
    this.todosService = todosService;
  }

  ngOnInit() {
    this.todosService.getAllTasks().subscribe(tasks => {
      this.tasks = tasks;
    }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddTodoDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      // Add new todo here
    });
  }

}

@Component({
  selector: 'app-add-todo-dialog',
  templateUrl: './add-todo-dialog.component.html',
  styleUrls: ['./add-todo-dialog.component.scss']
})
export class AddTodoDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
