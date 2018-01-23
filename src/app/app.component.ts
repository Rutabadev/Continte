import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SharingService } from './sharing.service';
import { Element } from './core/header/element';
import { ELEMENTS } from './core/header/mocks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  spacing: boolean;
  router: Router;
  elements: Element[];
  currentComponent: Element;

  sharingService: SharingService;

  constructor(sharingService: SharingService,
    private _router: Router) {
    this.sharingService = sharingService;
    this.router = _router;
    this.router.events.subscribe(() => {
      this.spacing = this.router.url === '/welcome' || this.router.url === '/snow';
      this.currentComponent = this.elements.filter(comp => comp.routerLink === this.router.url)[0];
      console.log(this.router.url);
      console.log(this.currentComponent);
    });
  }

  ngOnInit() {
    this.elements = ELEMENTS;
  }

  switchCompo(event) {
    if (event.direction === 4) {
      console.log('go left');
      const previousComponent = this.elements.filter(comp => comp.id === this.currentComponent.id - 1)[0];
      this.router.navigateByUrl(previousComponent.routerLink);
    } else if (event.direction === 2) {
      console.log('go right');
      const nextComponent = this.elements.filter(comp => comp.id === this.currentComponent.id + 1)[0];
      this.router.navigateByUrl(nextComponent.routerLink);
    }
  }
}
