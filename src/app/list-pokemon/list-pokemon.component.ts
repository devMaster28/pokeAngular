import { Component, OnInit, Input } from '@angular/core';
import { HostListener  } from "@angular/core";
import {Router} from '@angular/router';

import { DetailsPokemon } from '../GeneralPokemon';
import { RouterLink } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {
  @Input() pokemon:DetailsPokemon;
  

  constructor(private router: Router, private dataService:DataService) { }

  ngOnInit() {
  }

  @HostListener("click") onClick(){
    this.dataService.changePodemonDetail(this.pokemon);
    this.router.navigateByUrl("/detailPokemon");

    
  }


}
