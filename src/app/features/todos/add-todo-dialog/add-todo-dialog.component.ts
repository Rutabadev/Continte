import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import * as _ from 'lodash';

@Component({
   selector: 'app-add-todo-dialog',
   templateUrl: './add-todo-dialog.component.html',
   styleUrls: ['./add-todo-dialog.component.scss']
})
export class AddTodoDialogComponent implements OnInit {

   constructor(public dialogRef: MatDialogRef<AddTodoDialogComponent>,
       @Inject(MAT_DIALOG_DATA) public data: any) { }

   ngOnInit() {
       this.data.new_task = _.cloneDeep(this.data.initial_task);
   }

   onSubmit() {
      this.dialogRef.close(this.data);
   }
}
