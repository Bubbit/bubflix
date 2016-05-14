import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {BubflixMovieCardComponent} from '../bubflix-movie-card/bubflix-movie-card.component'
import {ImdbService} from '../../services/imdbService';

@Component({
  directives: [FORM_DIRECTIVES, BubflixMovieCardComponent],
  providers: [ImdbService],
  templateUrl: 'src/app/bubflix/bubflix-movies/bubflix-movies.component.html'
})

export class BubflixMoviesComponent {
 private movieList;
 private _imdbService;
 private searchResult;
 
  constructor(imdb_service: ImdbService) {
    this._imdbService = imdb_service;
    this._imdbService.get().subscribe(data => this.movieList = data.movies);
  }
  
  searchForMovie(form: any) {
    this._imdbService.search(form.movieTitle).subscribe(data => this.movieList = data.Search);
  }
}