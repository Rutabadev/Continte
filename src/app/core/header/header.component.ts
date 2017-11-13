import { Component, OnInit, Renderer2 } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  checked: boolean;
  overlayContainer: OverlayContainer;
  eventCalls: any;

  constructor(overlayContainer: OverlayContainer, private renderer: Renderer2) {
    this.overlayContainer = overlayContainer;
  }

  ngOnInit() {
    if (localStorage.getItem('darkTheme') === 'true') {
      this.setDarkTheme();
      this.checked = true;
    }
  }

  darkTheme(event) {
    console.log('darkTheme : ' + event.checked.toString());
    if (event.checked) {
      this.setDarkTheme();
      localStorage.setItem('darkTheme', 'true');
    } else {
      this.setLightTheme();
      localStorage.setItem('darkTheme', 'false');
    }
  }

  private setDarkTheme() {
    this.overlayContainer.getContainerElement().classList.add('unicorn-dark-theme');
    this.renderer.addClass(document.body, 'unicorn-dark-theme');
  }
  private setLightTheme() {
    this.overlayContainer.getContainerElement().classList.remove('unicorn-dark-theme');
    this.renderer.removeClass(document.body, 'unicorn-dark-theme');
  }


}
