import { Element } from './element';

export const ELEMENTS: Element[] = [
    {
        id: 0,
        name: 'Contintegration',
        routerLink: '/home',
        isMain: true,
        height: 'flat',
        icon: 'replay'
    },
    {
        id: 1,
        name: 'Welcome',
        routerLink: '/welcome',
        isMain: false,
        height: 'flat',
        icon: 'pan_tool'
    },
    {
        id: 2,
        name: 'Calendar',
        routerLink: '/calendar',
        isMain: false,
        height: 'flat',
        icon: 'date_range'
    },
    {
        id: 3,
        name: 'Panda',
        routerLink: '/panda',
        isMain: false,
        height: 'flat',
        icon: 'pets'
    },
    {
        id: 4,
        name: 'Todos',
        routerLink: '/todos',
        isMain: true,
        height: 'flat',
        icon: 'check_circle'
    },
    {
        id: 5,
        name: 'Snow',
        routerLink: '/snow',
        isMain: false,
        height: 'flat',
        icon: 'radio_button_unchecked'
    },
    {
        id: 6,
        name: 'Elsa',
        routerLink: '/elsa',
        isMain: false,
        height: 'flat',
        icon: 'favorite'
    }
];

export const THEMES: any[] = [
    {
        'color': 'blue',
        'icon': 'done'
    },
    {
        'color': 'orange',
        'icon': 'done'
    },
    {
        'color': 'yellow',
        'icon': 'pets'
    }
];
