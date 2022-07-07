import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Pokemon } from './models/pokemon.model';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url : string = 'https://pogoapi.net'; 
  constructor(private http : HttpClient) { }

  //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg


  // Mivel a válasz egy objektumokkal teli objektum, ezért ki kell szedni az értékeket elsőnek
  getPokemonNames(){
    return this.http.get<Pokemon[]>("https://pogoapi.net/api/v1/released_pokemon.json").pipe(
      map(response => Object.values(response))
    )

  }

}
