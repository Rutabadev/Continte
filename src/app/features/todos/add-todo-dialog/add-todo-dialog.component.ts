import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';


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

   onSubmit() {
      this.dialogRef.close(this.data);
   }
}
