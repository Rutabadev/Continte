import { Component, OnInit, Renderer2, Renderer } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Element } from './element';
import { ELEMENTS } from './mocks';
import { SharingService } from '../../sharing.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-header',
    providers : [],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    router: Router;
    sharingService: SharingService;
    checked: boolean;
    overlayContainer: OverlayContainer;
    eventCalls: any;
    elements: Element[];

    constructor(overlayContainer: OverlayContainer,
                private renderer: Renderer,
                private renderer2: Renderer2,
                sharingService: SharingService,
                private _router: Router) {
        this.overlayContainer = overlayContainer;
        this.sharingService = sharingService;
        this.router = _router;
    }

    ngOnInit() {
        if (localStorage.getItem('darkTheme') === 'true') {
            this.setDarkTheme();
            this.checked = true;
        } else {
            this.setLightTheme();
        }
        this.elements = ELEMENTS;
    }

    darkTheme() {
        // Also check if the value is null in case of first time seiing
        if (localStorage.getItem('darkTheme') === 'false' || localStorage.getItem('darkTheme') === null) {
            this.setDarkTheme();
            localStorage.setItem('darkTheme', 'true');
            this.checked = true;
        } else {
            this.setLightTheme();
            localStorage.setItem('darkTheme', 'false');
            this.checked = false;
        }
    }

    private setDarkTheme() {
        this.overlayContainer.getContainerElement().classList.add('unicorn-dark-theme');
        this.overlayContainer.getContainerElement().classList.remove('axolotl-light-theme');
        this.renderer2.addClass(document.body, 'unicorn-dark-theme');
        this.renderer2.removeClass(document.body, 'axolotl-light-theme');
    }
    private setLightTheme() {
        this.overlayContainer.getContainerElement().classList.add('axolotl-light-theme');
        this.overlayContainer.getContainerElement().classList.remove('unicorn-dark-theme');
        this.renderer2.removeClass(document.body, 'unicorn-dark-theme');
        this.renderer2.addClass(document.body, 'axolotl-light-theme');
    }
}
