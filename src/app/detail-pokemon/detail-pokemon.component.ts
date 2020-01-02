import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

import { DetailsPokemon } from '../GeneralPokemon';

import { DataService } from '../data.service';


@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {

  pokemon:DetailsPokemon;

  constructor(public dataServ:DataService,private router: Router) { 
    this.pokemon = dataServ.pokemonDetail;
  }

  ngOnInit() {
    
    console.log(this.pokemon);

    
  }
  volver(){
    console.log("atras");
    this.router.navigateByUrl("/listPokemons")
  }

}
