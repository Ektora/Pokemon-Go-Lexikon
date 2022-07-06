import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  constructor(private pokemonService : PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonNames().subscribe();
  }

  

}
