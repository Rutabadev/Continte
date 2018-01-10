import { TodosService } from './todos.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Todo } from './todo';
import { MasonryOptions } from 'angular2-masonry';
import { HttpClient, HttpHeaders, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';

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
   progress_value = 0;
   myOptions: MasonryOptions = {
      transitionDuration: '0.8s',
      columnWidth: 270,
      gutter: 20,
      fitWidth: true
   };

   constructor(todosService: TodosService,
      public dialog: MatDialog,
      public snackBar: MatSnackBar,
      private http: HttpClient) {
      this.todosService = todosService;
   }

   ngOnInit() {
      this.loading = true;
      this.http.request(this.todosService.getAllTasksRequest()).subscribe(event => {
         // Via this API, you get access to the raw event stream.
         // Look for download progress events.
         if (event.type === HttpEventType.DownloadProgress) {
            // This is an upload progress event. Compute and show the % done:
            this.progress_value = Math.round(100 * event.loaded / event.total);
            console.log(`File is ${this.progress_value}% downloaded.`);
         } else if (event instanceof HttpResponse) {
            console.log('File is completely downloaded!');
         }
      });
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
               inital_task: task,
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
            result.new_task.creation_date = Date.now();
            // Check if we need to create or update a task
            if (result.isUpdate) {
               this.todosService.updateTask(result.new_task);
               Object.assign(result.inital_task, result.new_task);
               this.snackBar.open('Task updated', null, {
                  duration: 2000
               });
            } else {
               const inital_task = Object.assign({}, result.new_task);
               // Temporary changes before we get the actual task from the db
               result.new_task._id = 'on sait pas encore';
               result.new_task.status = 'pending';
               this.tasks.push(result.new_task);
               this.todosService.createTask(inital_task).subscribe(
                  dbTask => {
                     Object.assign(result.new_task, dbTask);
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
      this.data.new_task = Object.assign({}, this.data.inital_task);
   }
}
