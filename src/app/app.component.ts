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

  sharingService: SharingService;

  constructor(sharingService: SharingService,
              private _router: Router) {
    this.sharingService = sharingService;
    this.router = _router;
    this.router.events.subscribe(() => {
      this.spacing = this.router.url === '/welcome' || this.router.url === '/snow';
    });
  }

  ngOnInit() {
    this.elements = ELEMENTS;
  }

  switchCompo(event) {
    if (event.direction === 4) {
      console.log('right');
    } else if (event.direction === 2) {
      console.log('left');
    }
  }
}
