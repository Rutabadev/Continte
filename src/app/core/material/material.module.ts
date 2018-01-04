import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatTooltipModule,
  MatCardModule,
  MatGridListModule,
  MatDialogModule,
  MatSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatTooltipModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  declarations: []
})
export class MaterialModule { }
