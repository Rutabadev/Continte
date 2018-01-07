import { TodosService } from './todos.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Todo } from './todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  providers: [TodosService]
})
export class TodosComponent implements OnInit {
  loading = true;
  tasks: any[];
  todosService: TodosService;

  constructor(todosService: TodosService, public dialog: MatDialog, public snackBar: MatSnackBar) {
    this.todosService = todosService;
  }

  ngOnInit() {
    this.todosService.getAllTasks().subscribe(tasks => {
      this.tasks = tasks;
      this.loading = false;
    }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddTodoDialogComponent, {
      width: '250px',
      data: { name: null }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.todosService.createTask(result);
        this.snackBar.open('Task created', null, {
          duration: 2000
        });
      }
    });
  }

  delete(id) {
    this.todosService.deleteTask(id).subscribe(result => {
      this.snackBar.open('Task deleted', null, {
        duration: 2000
      });
    });
  }

  update(task) {
    alert('Not implemented yet\n' + JSON.stringify(task));
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
