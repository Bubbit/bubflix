import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

import {Movie} from '../bubflix-movie/movie';
import {TorrentService} from '../../services/torrentService';

@Component({
    selector: 'movie-card',
    directives: [NgClass],
    providers: [TorrentService],
    template: `
    <div class="panel panel-default">
        <div class="panel-heading">{{movie.Title}}</div>
        <div class="panel-body">
           <img [src]="movie.Poster" class="img-responsive" alt="{{movie.Title}}">
        </div> 
        <ul class="list-group">
            <li class="list-group-item">Metascore: {{movie.Metascore}}</li>
            <li class="list-group-item">Runtime: {{movie.Runtime}}</li>
            <li class="list-group-item">Genre: {{movie.Genre}}</li>
            <li class="list-group-item">Year: {{movie.Year}}</li>
            <li class="list-group-item">Plot: {{movie.Plot}}</li>
            <li class="list-group-item"><button type="button" class="btn btn-success" (click)="showTorrents(movie.Title)">Download</button></li>
        </ul>
        <div *ngIf="torrents">
            <ul class="list-group">
                <li *ngFor="let torrent of torrents.list" class="list-group-item">
                    {{torrent.title}}
                </li>
            </ul>
        </div>
    </div>
    `
})

export class BubflixMovieCardComponent {
    @Input() movie: Movie;
    
    private torrentList = false;    
    private _torrentService;
    private torrents;
    
    constructor(torrent_service: TorrentService) {
        this._torrentService = torrent_service;
    }
    
    showTorrents(title: string) {
        this.torrentList = !this.torrentList; 
        if(this.torrentList) {
            this._torrentService.search(title, 'movies').subscribe(data => this.torrents = JSON.parse(data));    
        }    
    }  
}