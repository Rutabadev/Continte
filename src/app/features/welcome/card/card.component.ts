import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../content';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  iconBkp: string;
  @Input() content: Content;

  constructor() { }

  ngOnInit() {
    this.iconBkp = this.content.icon;
  }

  switchIcon() {
    if (this.content.icon === 'add') {
      this.content.icon = this.iconBkp;
    } else {
      this.content.icon = 'add';
    }
  }

}
