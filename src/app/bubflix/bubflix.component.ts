import {Component} from '@angular/core';
import {RouteConfig, RouterOutlet, RouterLink} from '@angular/router-deprecated';
import {BubflixDashboardComponent} from "./bubflix-dashboard/bubflix-dashboard.component";
import {BubflixMoviesComponent} from "./bubflix-movies/bubflix-movies.component";
import {BubflixSeriesComponent} from "./bubflix-series/bubflix-series.component";

@RouteConfig([
    {path:'/', name: 'BubflixDashboard', component: BubflixDashboardComponent, useAsDefault: true},
    {path:'/movies', name: 'BubflixMovies', component: BubflixMoviesComponent},
    {path:'/series', name: 'BubflixSeries', component: BubflixSeriesComponent}
])

@Component({
    template: `
        <div class="row">
            <div class="col-md-1">
                <ul class="nav navbar-nav">
                    <li><a [routerLink]="['BubflixDashboard']">Dashboard</a></li>
                    <li><a [routerLink]="['BubflixMovies']">Movies</a></li>
                    <li><a [routerLink]="['BubflixSeries']">Series</a></li>
                </ul></div>
            <div class="col-md-11"><router-outlet></router-outlet></div>
        </div>`,
    directives: [RouterOutlet, RouterLink],
})

export class BubflixComponent {

}