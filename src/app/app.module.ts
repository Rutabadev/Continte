import { FeaturesModule } from './features/features.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule } from 'angular-calendar';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { IntegrationComponent } from './features/integration/integration.component';
import { AppRoutingModule } from './app.routing';
import { SharingService } from './sharing.service';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'pinch': { enable: false },
    'rotate': { enable: false }
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    FeaturesModule,
    NgbModule.forRoot(),
    CalendarModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    SharingService,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}

