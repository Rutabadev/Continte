import { TodosComponent } from './features/todos/todos.component';
import { ConcurencialInfosComponent } from './features/welcome/concurencial-infos/concurencial-infos.component';
import { CalendarsInfosComponent } from './features/welcome/calendars-infos/calendars-infos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { IntegrationComponent } from './features/integration/integration.component';
import { HomeComponent } from './features/home/home.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { PandaComponent } from './features/panda/panda.component';
import { EditInfosComponent } from './features/welcome/edit-infos/edit-infos.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'welcome', children: [
    {
      path: '', component: WelcomeComponent
    },
    {
      path: 'calendars-infos', component: CalendarsInfosComponent
    },
    {
      path: 'calendars-infos', component: CalendarsInfosComponent
    },
    {
      path: 'edit-infos', component: EditInfosComponent
    },
    {
      path: 'concurencial-infos', component: ConcurencialInfosComponent
    }
  ]},
  { path: 'calendar', component: IntegrationComponent },
  { path: 'panda', component: PandaComponent },
  { path: 'todos', component: TodosComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '404', component: NotFoundComponent },

  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
