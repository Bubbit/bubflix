import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Hero} from './hero';
import {HeroService} from "./hero.service";

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    stylesUrls: ['app/heroes.component.css']
})

export class HeroesComponent implements OnInit {
    public title = 'Tour of Heroes';
    public selectedHero: Hero;
    public heroes = [];

    constructor(
        private _router: Router,
        private _heroService: HeroService) { }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }

    gotoDetail() {
        let link = ['HeroDetail', {id: this.selectedHero.id}];
        this._router.navigate(link);
    }
}
