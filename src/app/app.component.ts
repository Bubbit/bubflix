import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {NavigationComponent} from "./navigation/navigation.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {BubifyComponent} from "./bubify/Bubify.component";
import {BubflixComponent} from "./bubflix/bubflix.component";

@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/bubify',
        name: 'Bubify',
        component: BubifyComponent
    },
    {
        path: '/bubflix/...',
        name: 'Bubflix',
        component: BubflixComponent
    }
])

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES, NavigationComponent],
    providers: [ROUTER_PROVIDERS],
    template:   `<navigation-bar></navigation-bar>
                <router-outlet></router-outlet>
                `
})


export class App {
    public title = 'Tour of Heroes'
}