import { IntegrationComponent } from './integration/integration.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarComponent } from './integration/calendar/calendar.component';
import { NgbDatepickerModule, NgbTimepickerModule} from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule } from 'angular-calendar';
import { CalendarHeaderComponent } from './integration/calendar/calendar-header/calendar-header.component';
import { DateTimePickerComponent } from './integration/calendar/date-time-picker/date-time-picker.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    NgbDatepickerModule.forRoot(),
    NgbTimepickerModule.forRoot(),
    CalendarModule
  ],
  exports: [
    WelcomeComponent,
    IntegrationComponent,
    CalendarComponent,
    CalendarHeaderComponent,
    DateTimePickerComponent
  ],
  declarations: [ WelcomeComponent, IntegrationComponent, CalendarComponent, CalendarHeaderComponent, DateTimePickerComponent]
})
export class FeaturesModule { }
