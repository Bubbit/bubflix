import {Component, Input} from '@angular/core';
import {Movie} from '../bubflix-movie/movie';

@Component({
    selector: 'movie-card',
    template: `
    <div class="panel panel-default">
        <div class="panel-heading">{{movie.Title}}</div>
        <div class="panel-body">
           <img [src]="movie.Poster">
        </div> 
        <ul class="list-group">
            <li class="list-group-item">Metascore: {{movie.Metascore}}</li>
            <li class="list-group-item">Runtime: {{movie.Runtime}}</li>
            <li class="list-group-item">Genre: {{movie.Genre}}</li>
            <li class="list-group-item">Year: {{movie.Year}}</li>
            <li class="list-group-item">Plot: {{movie.Plot}}</li>
        </ul>
    </div>   
    `
})

export class BubflixMovieCardComponent {
    @Input() movie: Movie;
}