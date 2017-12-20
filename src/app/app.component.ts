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
  elements: Element[];

  sharingService: SharingService;

  constructor(sharingService: SharingService) {
    this.sharingService = sharingService;
  }

  ngOnInit() {
    this.elements = ELEMENTS;
  }
}
