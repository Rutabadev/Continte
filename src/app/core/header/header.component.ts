import { Component, OnInit, Renderer2, Renderer } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Element } from './element';
import { ELEMENTS } from './mocks';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    checked: boolean;
    overlayContainer: OverlayContainer;
    eventCalls: any;
    elements: Element[];

    constructor(overlayContainer: OverlayContainer, private renderer: Renderer, private renderer2: Renderer2) {
        this.overlayContainer = overlayContainer;
    }

    ngOnInit() {
        if (localStorage.getItem('darkTheme') === 'true') {
            this.setDarkTheme();
            this.checked = true;
        }
        this.elements = ELEMENTS;
    }

    darkTheme() {
        // Also check if the value is null in case of first time seiing
        if (localStorage.getItem('darkTheme') === 'false' || localStorage.getItem('darkTheme') === null) {
            this.setDarkTheme();
            localStorage.setItem('darkTheme', 'true');
        } else {
            this.setLightTheme();
            localStorage.setItem('darkTheme', 'false');
        }
    }

    private setDarkTheme() {
        this.overlayContainer.getContainerElement().classList.add('unicorn-dark-theme');
        this.renderer2.addClass(document.body, 'unicorn-dark-theme');
    }
    private setLightTheme() {
        this.overlayContainer.getContainerElement().classList.remove('unicorn-dark-theme');
        this.renderer2.removeClass(document.body, 'unicorn-dark-theme');
    }

    activate(activatedElement) {
        this.elements.forEach(element => {
            element.isActive = false;
        });
        activatedElement.isActive = true;
    }
}
