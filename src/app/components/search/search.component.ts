import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { HeroesComponent } from '../heroes/heroes.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

    heroes: any[] = [];
    termino: string;

  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe( params => {
        this.termino = params['searchText'];
        this.heroes = this._heroesService.buscarHeroes( params['searchText'] );
        console.log(this.heroes);
    })

  }


}
