import { Component,OnInit, Input } from '@angular/core';

import {PokemonService} from '../pokemon.service';
import {MatButtonModule} from '@angular/material/button'; 
import { from } from 'rxjs';
import { element } from 'protractor';
import { DataService } from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-pokemons',
  templateUrl: './view-pokemons.component.html',
  styleUrls: ['./view-pokemons.component.css']
})
export class ViewPokemonsComponent implements OnInit {

  title = 'myFirstAngularApp';
  previus:string;
  next:string;
  pokemons = [];

  constructor(private service: PokemonService,private data:DataService,private router:Router){
    this.actualizaLista('https://pokeapi.co/api/v2/pokemon/?limit=5');

  }

  actualizaLista(url:string){

    this.service.getPokemons(url).subscribe(
      result =>{
        console.log(result);
          this.next = result.next;
          this.previus = result.previous;
          this.pokemons = [];

        for(let i = 0; i<result.results.length; i++){
          
          this.service.getDataPokemon(result.results[i].url).subscribe(poke => {
            
          this.pokemons.push(poke);

          });
          
        }

      }
    );

  }

  atras(){
    
    this.actualizaLista(this.previus);
  }

  siguentes(){
    
    this.actualizaLista(this.next);
  }
  buscarpokemon(){
    let inp = <HTMLInputElement>document.getElementById("buscar");
    this.service.searchPokemon("https://pokeapi.co/api/v2/pokemon/" + inp.value).subscribe(poke => {
      this.pokemons = [];      
      this.pokemons.push(poke);

      },
       error =>{
         console.error(error)
       }
      );

    
    (<HTMLInputElement>document.getElementById("buscar")).value = "";
  }

  volver(){
    this.router.navigateByUrl('');
  }
  ngOnInit() {
    
        
  }


}
