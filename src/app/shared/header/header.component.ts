import { Component, OnInit, Renderer2 } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  overlayContainer: OverlayContainer;
  eventCalls: any;

  constructor(overlayContainer: OverlayContainer, private renderer: Renderer2) {
    this.overlayContainer = overlayContainer;
  }

  ngOnInit() {
  }

  darkTheme(event) {
    console.log('darkTheme : ' + event.checked.toString());
    if (event.checked) {
      this.overlayContainer.getContainerElement().classList.add('unicorn-dark-theme');
      this.renderer.addClass(document.body, 'unicorn-dark-theme');
    } else {
      this.overlayContainer.getContainerElement().classList.remove('unicorn-dark-theme');
      this.renderer.removeClass(document.body, 'unicorn-dark-theme');
    }
  }

}
