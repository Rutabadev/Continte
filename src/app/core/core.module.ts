import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { DateTimePipe } from './pipes/date-time.pipe';

@NgModule({
   imports: [
      CommonModule,
      MaterialModule,
      RouterModule
   ],
   exports: [
      MaterialModule,
      HeaderComponent,
      FooterComponent,
      DateTimePipe
   ],
   declarations: [HeaderComponent, FooterComponent, DateTimePipe]
})
export class CoreModule { }
