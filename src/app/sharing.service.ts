import { Injectable } from '@angular/core';

@Injectable()
export class SharingService {
  opened: boolean;

  constructor() {
    this.opened = false;
  }
}
