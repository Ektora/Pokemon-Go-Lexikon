import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { HttpClient} from '@angular/common/http';
import { Pokemon } from './models/pokemon.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemons : Pokemon[] = [];
  constructor(private pokemonService : PokemonService) {
    
   }

   ngOnInit(): void {
   this.listPokemons();
   
  }

  listPokemons(){
    this.pokemonService.getPokemonNames().subscribe( 
        data => {this.pokemons = data;
        }
      )
  }
}
