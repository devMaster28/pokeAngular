import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import{RouterModule,Route} from '@angular/router'
import { AppComponent } from './app.component';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';

import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import{MaterialModule}from './materialModule'

import {PokemonService} from './pokemon.service';
import { from } from 'rxjs';
import { ViewPokemonsComponent } from './view-pokemons/view-pokemons.component';
import { StartingPageComponent } from './starting-page/starting-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';



@NgModule({
  declarations: [
    AppComponent, 
    ListPokemonComponent, ViewPokemonsComponent, StartingPageComponent, DetailPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
