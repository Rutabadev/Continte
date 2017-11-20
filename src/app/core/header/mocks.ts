import { Element } from './element'

export const ELEMENTS: Element[] = [
    {
        name: "Contintegration",
        routerLink: '/home',
        main: true,
        isActive: false
    },
    {
        name: "Welcome",
        routerLink: '/welcome',
        main: false,
        isActive: false
    },
    {
        name: "Calendar",
        routerLink: '/calendar',
        main: false,
        isActive: false
    }
]