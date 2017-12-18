import { FeaturesModule } from './features/features.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule } from 'angular-calendar';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { IntegrationComponent } from './features/integration/integration.component';
import { AppRoutingModule } from './app.routing';
import { SharingService } from './sharing.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    FeaturesModule,
    NgbModule.forRoot(),
    CalendarModule.forRoot(),
    AppRoutingModule
  ],
  providers: [SharingService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}

