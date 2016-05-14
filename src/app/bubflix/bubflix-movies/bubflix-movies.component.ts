import {Component} from '@angular/core';

@Component({
    templateUrl: 'src/app/bubflix/bubflix-movies/bubflix-movies.component.html'
})

export class BubflixMoviesComponent {
 private movieList;
  constructor() {
    this.movieList = [{"title": "Rockt"}];
  }
}