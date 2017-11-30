import { Component, OnInit } from '@angular/core';
import { SharingService } from '../../sharing.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

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
