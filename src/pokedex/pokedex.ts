/**
 * Funcion que nos servira como una pokedex para el almacenamiento de informacion de los pokemons
 * @param pokemons una lista de todos los pokemons de la pokedez
 * @param getPokemons coger los pokemons de la lista de pokemons
 */
import {Pokemon} from '../pokemon/pokemon';
export class Pokedex {
  constructor(protected pokemons: Pokemon[]) {

  }
  getPokemons(): Pokemon[] {
    return this.pokemons;
  }
}
