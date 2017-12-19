import { Element } from './element';

export const ELEMENTS: Element[] = [
   {
      name: 'Contintegration',
      routerLink: '/home',
      isMain: true,
      height: 'flat'
   },
   {
      name: 'Welcome',
      routerLink: '/welcome',
      isMain: false,
      height: 'flat'
   },
   {
      name: 'Calendar',
      routerLink: '/calendar',
      isMain: false,
      height: 'flat'
   },
   {
      name: 'Panda',
      routerLink: '/panda',
      isMain: false,
      height: 'flat'
   },
   {
      name: 'Todos',
      routerLink: '/todos',
      isMain: true,
      height: 'flat'
   }
];
