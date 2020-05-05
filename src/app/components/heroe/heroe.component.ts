import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

    heroe: any = {};

    constructor( private activatedRoute: ActivatedRoute, private _heroesService: HeroesService, private route: Router ) {
        this.activatedRoute.params.subscribe( params => {
            this.heroe = this._heroesService.getHeroe ( params.id );
        });
    }

    ngOnInit(): void {
    }

    backHeroes(){
        this.route.navigate(['/heroes']);
    }

}
