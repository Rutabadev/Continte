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

  getDark() {
    return this.dark;
  }

  setDark(value) {
    this.dark = value;
  }
}
