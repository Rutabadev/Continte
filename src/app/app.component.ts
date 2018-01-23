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
  }

  ngOnInit() {
    this.elements = ELEMENTS;
    this.router.events.subscribe(() => {
      this.spacing = this.router.url === '/welcome' || this.router.url === '/snow';
      this.currentComponent = this.elements.filter(comp => comp.routerLink === this.router.url)[0];
    });
  }

  switchCompo(event) {
    if (event.direction === 4) {
      const previousComponent = this.elements.filter(comp => comp.id === this.currentComponent.id - 1)[0];
      this.router.navigateByUrl(previousComponent.routerLink);
    } else if (event.direction === 2) {
      const nextComponent = this.elements.filter(comp => comp.id === this.currentComponent.id + 1)[0];
      this.router.navigateByUrl(nextComponent.routerLink);
    }
  }
}
