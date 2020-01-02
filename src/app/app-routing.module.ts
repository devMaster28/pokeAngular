import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { ViewPokemonsComponent } from './view-pokemons/view-pokemons.component';
import { StartingPageComponent } from './starting-page/starting-page.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';

import { DetailsPokemon } from './GeneralPokemon';


const routes: Route[] = [
  {path:'', component: StartingPageComponent },
  {path: 'listPokemons' , component: ViewPokemonsComponent},
  {path: 'detailPokemon' , component: DetailPokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
