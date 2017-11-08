import { IntegrationComponent } from './integration/integration.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './integration/calendar/calendar.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    WelcomeComponent,
    IntegrationComponent
  ],
  declarations: [ WelcomeComponent, IntegrationComponent, CalendarComponent]
})
export class FeaturesModule { }
