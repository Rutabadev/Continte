import { TodosService } from './todos.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Todo } from './todo';
import { MasonryOptions } from 'angular2-masonry';

@Component({
   selector: 'app-todos',
   templateUrl: './todos.component.html',
   styleUrls: ['./todos.component.scss'],
   providers: [TodosService]
})
export class TodosComponent implements OnInit {
   loading: boolean;
   tasks: Todo[];
   todosService: TodosService;
   myOptions: MasonryOptions = {
      transitionDuration: '0.8s',
      columnWidth: 270,
      gutter: 20
   };

   constructor(todosService: TodosService, public dialog: MatDialog, public snackBar: MatSnackBar) {
      this.todosService = todosService;
   }

   ngOnInit() {
      this.loading = true;
      this.todosService.getAllTasks().subscribe(tasks => {
         this.tasks = tasks;
         this.loading = false;
      });
   }

   // Creates a task if no parameter, updates othewise
   openDialog(task): void {
      let options;

      if (task) {
         options = {
            width: '250px',
            data: {
               task: task,
               isUpdate: true
            }
         };
      } else {
         options = {
            width: '250px',
            data: {
               task: {
                  name: null
               }
            }
         };
      }

      const dialogRef = this.dialog.open(AddTodoDialogComponent, options);

      dialogRef.afterClosed().subscribe(result => {
         // Check if the dialog as been completed or just exited
         if (result) {
            result.task.creation_date = Date.now();
            // Check if we need to create or update a task
            if (result.isUpdate) {
               this.todosService.updateTask(result.task);
               this.snackBar.open('Task updated', null, {
                  duration: 2000
               });
            } else {
               const inital_task = Object.assign({}, result.task);
               // Temporary changes before we get the actual task from the db
               result.task._id = 'on sait pas encore';
               result.task.status = 'pending';
               this.tasks.push(result.task);
               this.todosService.createTask(inital_task).subscribe(
                  dbTask => {
                     result.task._id = dbTask._id;
                  }, error => {
                     console.log('error: ' + JSON.stringify(error));
                  });
               this.snackBar.open('Task created', null, {
                  duration: 2000
               });
            }
         }
      });
   }

   delete(id) {
      this.todosService.deleteTask(id).subscribe(result => {
         this.tasks = this.tasks.filter(task => (task._id !== id));
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
