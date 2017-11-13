import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule } from 'angular-calendar';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { IntegrationComponent } from './features/integration/integration.component';

const appRoutes: Routes = [
   { path: 'welcome', component: WelcomeComponent },
   { path: 'integration', component: IntegrationComponent },
   {path: '', redirectTo: '/welcome', pathMatch: 'full'}
 ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
   RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    FeaturesModule,
    NgbModule.forRoot(),
    CalendarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}

