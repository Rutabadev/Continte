import { Element } from './element';

export const ELEMENTS: Element[] = [
    {
        name: 'Contintegration',
        routerLink: '/home',
        main: true,
        isActive: false,
        height: 'flat'
    },
    {
        name: 'Welcome',
        routerLink: '/welcome',
        main: false,
        isActive: false,
        height: 'flat'
    },
    {
        name: 'Calendar',
        routerLink: '/calendar',
        main: false,
        isActive: false,
        height: 'flat'
    }
];
