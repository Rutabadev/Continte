import { CoreModule } from '../core/core.module';
import { IntegrationComponent } from './integration/integration.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarComponent } from './integration/calendar/calendar.component';
import { NgbDatepickerModule, NgbTimepickerModule} from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule } from 'angular-calendar';
import { CalendarHeaderComponent } from './integration/calendar/calendar-header/calendar-header.component';
import { DateTimePickerComponent } from './integration/calendar/date-time-picker/date-time-picker.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PandaComponent } from './panda/panda.component';
import { CalendarsInfosComponent } from './welcome/calendars-infos/calendars-infos.component';
import { EditInfosComponent } from './welcome/edit-infos/edit-infos.component';
import { ConcurencialInfosComponent } from './welcome/concurencial-infos/concurencial-infos.component';
import { RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { CardComponent } from './welcome/card/card.component';
import { HttpModule } from '@angular/http';
import { SnowComponent } from './snow/snow.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    NgbDatepickerModule.forRoot(),
    NgbTimepickerModule.forRoot(),
    CalendarModule,
    RouterModule,
    HttpModule
  ],
  declarations: [ WelcomeComponent,
                  IntegrationComponent,
                  CalendarComponent,
                  CalendarHeaderComponent,
                  DateTimePickerComponent,
                  HomeComponent,
                  NotFoundComponent,
                  PandaComponent,
                  CalendarsInfosComponent,
                  EditInfosComponent,
                  ConcurencialInfosComponent,
                  TodosComponent,
                  CardComponent,
                  SnowComponent]
})
export class FeaturesModule { }
