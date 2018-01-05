import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-panda',
  templateUrl: './panda.component.html',
  styleUrls: ['./panda.component.scss']
})
export class PandaComponent implements OnInit {
  @ViewChild('video') video: any;

  constructor() { }

  ngOnInit() {
    this.video.nativeElement.play();
  }
}
