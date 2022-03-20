/**
 * En esta clase se realizara el calculo del daño y la simulacion del combate de los pokemons
 * @param getPokemon1 coger el pokemon 1 de la clase combat
 * @param getPokemon2 coger el pokemon 2 de la clase combat
 * @param combate calculo del daño del combate pokemon
 * @param start simulacion del combate pokemon
 */
import {Pokemon} from '../pokemon/pokemon';
export class Combat {
  constructor(protected pokemon1: Pokemon, protected pokemon2: Pokemon) {

  }

  getPokemon1(): Pokemon {
    return this.pokemon1;
  }
  getPokemon2(): Pokemon {
    return this.pokemon2;
  }

  combate(pokemon1: Pokemon, pokemon2: Pokemon) {
    let daño: number = 0;

    if (pokemon1.getTipo() == 'fuego') {
      if (pokemon2.getTipo() == 'hierba') {
        daño = 50 * (pokemon1.getAtaque() / pokemon2.getDefensa()) * 2;
      } else if (pokemon2.getTipo() == 'electrico') {
        daño = 50 * (pokemon1.getAtaque() / pokemon2.getDefensa()) * 1;
      } else if (pokemon2.getTipo() == 'fuego') {
        daño = 50 * (pokemon1.getAtaque() / pokemon2.getDefensa()) * 0.5;
      } else if (pokemon2.getTipo() == 'agua') {
        daño = 50 * (pokemon1.getAtaque() / pokemon2.getDefensa()) * 0.5;
      }
    }

    if (pokemon1.getTipo() == 'hierba') {
      if (pokemon2.getTipo() == 'hierba') {
        daño = 50 * (pokemon1.getAtaque() / pokemon2.getDefensa()) * 0.5;
      } else if (pokemon2.getTipo() == 'electrico') {
        daño = 50 * (pokemon1.getAtaque() / pokemon2.getDefensa()) * 1;
      } else if (pokemon2.getTipo() == 'fuego') {
        daño = 50 * (pokemon1.getAtaque() / pokemon2.getDefensa()) * 0.5;
      } else if (pokemon2.getTipo() == 'agua') {
        daño = 50 * (pokemon1.getAtaque() / pokemon2.getDefensa()) * 2;
      }
    }

    if (pokemon1.getTipo() == 'agua') {
      if (pokemon2.getTipo() == 'hierba') {
        daño = 50 * (pokemon1.getAtaque() / pokemon2.getDefensa()) * 0.5;
      } else if (pokemon2.getTipo() == 'electrico') {
        daño = 50 * (pokemon1.getAtaque() / pokemon2.getDefensa()) * 1;
      } else if (pokemon2.getTipo() == 'fuego') {
        daño = 50 * (pokemon1.getAtaque() / pokemon2.getDefensa()) * 2;
      } else if (pokemon2.getTipo() == 'agua') {
        daño = 50 * (pokemon1.getAtaque() / pokemon2.getDefensa()) * 0.5;
      }
    }

    if (pokemon1.getTipo() == 'electrico') {
      if (pokemon2.getTipo() == 'hierba') {
        daño = 50 * (pokemon1.getAtaque() / pokemon2.getDefensa()) * 0.5;
      } else if (pokemon2.getTipo() == 'electrico') {
        daño = 50 * (pokemon1.getAtaque() / pokemon2.getDefensa()) * 1;
      } else if (pokemon2.getTipo() == 'fuego') {
        daño = 50 * (pokemon1.getAtaque() / pokemon2.getDefensa()) * 1;
      } else if (pokemon2.getTipo() == 'agua') {
        daño = 50 * (pokemon1.getAtaque() / pokemon2.getDefensa()) * 2;
      }
    }

    return daño;
  }

  start() {
    let aux: number = 0;
    let vida1: number = this.pokemon1.getDamage();
    let vida2: number = this.pokemon2.getDamage();

    while (vida1 > 0 && vida2 > 0) {
      aux = Math.floor(this.combate(this.pokemon1, this.pokemon2));
      vida2 = Math.floor(vida2 - aux);
      if (vida2 <= 0) {
        console.log(`${this.pokemon2.getName()} esta debilitado`);
        break;
      }
      console.log("Combate pokemon");
      // eslint-disable-next-line max-len
      console.log(`${this.pokemon1.getName()} tiene esta vida: ${vida1} le ha quitado ${aux} a ${this.pokemon2.getName()} y le queda ${vida2}`);

      aux = Math.floor(this.combate(this.pokemon2, this.pokemon1));
      vida1 = Math.floor(vida1 - aux);
      if (vida1 <= 0 ) {
        console.log(`${this.pokemon1.getName()} esta debilitado`);
        break;
      }
      console.log("Combate pokemon");
      // eslint-disable-next-line max-len
      console.log(`${this.pokemon2.getName()} tiene esta vida: ${vida2} le ha quitado ${aux} a ${this.pokemon1.getName()} y le queda ${vida1}`);
    }
    if (vida1 <= 0) {
      console.log(`${this.pokemon2.getName()} es el ganador`);
    } else {
      console.log(`${this.pokemon1.getName()} es el ganador`);
    }
  }
}
