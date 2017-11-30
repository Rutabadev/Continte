import { Injectable } from '@angular/core';

@Injectable()
export class SharingService {

  constructor() {
    if (localStorage.getItem('darkTheme') === 'true') {
      this.dark = true;
    } else {
      this.dark = false;
    }
  }
  dark: boolean;


}
