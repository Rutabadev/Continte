import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  date_range: string;
  edit: string;
  cloud: string;

  constructor() { }

  ngOnInit() {
    this.date_range = 'date_range';
    this.edit = 'edit';
    this.cloud = 'cloud';
  }
}
