import { Component, OnInit } from '@angular/core';
import { SharingService } from '../../sharing.service';

@Component({
  selector: 'app-not-found',
  providers : [SharingService],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  sharingService: SharingService;

  constructor(sharingService: SharingService) {
    this.sharingService = sharingService;
  }

  ngOnInit() {
  }

}
