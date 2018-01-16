import { Element } from './element';

export const ELEMENTS: Element[] = [
   {
      name: 'Contintegration',
      routerLink: '/home',
      isMain: true,
      height: 'flat',
      icon: 'replay'
   },
   {
      name: 'Welcome',
      routerLink: '/welcome',
      isMain: false,
      height: 'flat',
      icon: 'pan_tool'
   },
   {
      name: 'Calendar',
      routerLink: '/calendar',
      isMain: false,
      height: 'flat',
      icon: 'date_range'
   },
   {
      name: 'Panda',
      routerLink: '/panda',
      isMain: false,
      height: 'flat',
      icon: 'pets'
   },
   {
      name: 'Todos',
      routerLink: '/todos',
      isMain: true,
      height: 'flat',
      icon: 'check_circle'
   },
   {
      name: 'Snow',
      routerLink: '/snow',
      isMain: false,
      height: 'flat',
      icon: 'radio_button_unchecked'
   },
   {
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
    },
    {
        'color': 'orange'
    },
    {
        'color': 'yellow'
    }
 ];
