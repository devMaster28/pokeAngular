import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {DetailsPokemon,ListPokemon} from './GeneralPokemon';
 

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) {

    console.log('Funciona el servicio');


   }

   getPokemons(urlPeticion: string){

    return this.httpClient.get<ListPokemon>(urlPeticion);
    

   }

   getDataPokemon(urlpokemon: string){
     
    return this.httpClient.get<DetailsPokemon>(urlpokemon);
    

   }

   searchPokemon(urlSearch:string){
     return this.httpClient.get<DetailsPokemon>(urlSearch);

   }
}
