import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elsa',
  templateUrl: './elsa.component.html',
  styleUrls: ['./elsa.component.scss']
})
export class ElsaComponent implements OnInit {

  x = 0;
  y = 0;
  startX = 0;
  startY = 0;

  constructor() { }

  ngOnInit() {
  }


  onPanStart(event: any): void {
    event.preventDefault();
    this.startX = this.x;
    this.startY = this.y;
  }

  onPan(event: any): void {
    event.preventDefault();
    this.x = this.startX + event.deltaX * 2;
    this.y = this.startY + event.deltaY;
  }

}
