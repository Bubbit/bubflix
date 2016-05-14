import {Component} from '@angular/core';
import {ImdbService} from '../../services/imdbService';

@Component({
  providers: [ImdbService],
  templateUrl: 'src/app/bubflix/bubflix-movies/bubflix-movies.component.html'
})

export class BubflixMoviesComponent {
 private movieList;
  constructor(movies: ImdbService) {
    movies.get().subscribe(data => this.movieList = data.movies);
  }
}