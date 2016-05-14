import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
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
        path: '/Bubify',
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
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES, NavigationComponent],
    providers: [ROUTER_PROVIDERS],
    template:   `
                <navigation-bar></navigation-bar>
                <router-outlet></router-outlet>
                `
})


export class AppComponent {
    public title = 'Tour of Heroes'
}