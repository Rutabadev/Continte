import { Element } from './element';

export const ELEMENTS: Element[] = [
   {
      name: 'Contintegration',
      routerLink: '/home',
      isMain: true,
      isActive: false,
      height: 'flat'
   },
   {
      name: 'Welcome',
      routerLink: '/welcome',
      isMain: false,
      isActive: false,
      height: 'flat'
   },
   {
      name: 'Calendar',
      routerLink: '/calendar',
      isMain: false,
      isActive: false,
      height: 'flat'
   },
   {
      name: 'Panda',
      routerLink: '/panda',
      isMain: true,
      isActive: false,
      height: 'flat'
   }
];
