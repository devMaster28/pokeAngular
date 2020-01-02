import { Injectable } from '@angular/core';
import { DetailsPokemon } from './GeneralPokemon';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  pokemonDetail:DetailsPokemon;

  constructor() { }

  changePodemonDetail(pokemon:DetailsPokemon){
    this.pokemonDetail = pokemon;
  }
}
