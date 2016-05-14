import {Component} from '@angular/core';
import {RouterLink} from '@angular/router-deprecated';

@Component({
    selector: 'navigation-bar',
    directives: [RouterLink],
    template: `
            <nav class="navbar navbar-default">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" (click)="isCollapsed = !isCollapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <span class="navbar-brand">Media center Bub</span>
                    </div>
                    <div id="navbar" class="navbar-collapse" [ngClass]="{collapse: isCollapsed}">
                        <ul class="nav navbar-nav">
                            <li><a [routerLink]="['Dashboard']">Overview</a></li>
                            <li><a [routerLink]="['Bubflix']">Bubflix</a></li>
                            <li><a [routerLink]="['Bubify']">Bubify</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        `,
    styleUrls:  ['src/app/navigation/navigation.component.css']
})

export class NavigationComponent {
    isCollapsed = true;
}