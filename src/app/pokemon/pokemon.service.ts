import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url : string = 'https://pogoapi.net'; 
  constructor(private http : HttpClient) { }

  getPokemonNames(){
    //return this.http.get(this.url + '/api/v1/pokemon_names.json')
    return this.http.get("https://pogoapi.net/api/v1/released_pokemon.json")
    .pipe(map(
      response => console.log(response)
    ));
  }

}
