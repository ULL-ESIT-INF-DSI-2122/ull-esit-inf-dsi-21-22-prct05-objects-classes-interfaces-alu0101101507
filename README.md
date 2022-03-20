# Práctica 5: Objetos, clases e interfaces

## Ejercicio 1 - Pokedex

En este ejercicio hemos de crear una pokedex que almaecen pokemons, para ello hemos de crear una clase pokemons que cuente con las siguientes caracteristicas:
-Nombre y tipo
-Altura,Peso
-Ataque,Defensa,Velocidad y Daño(HP)

La clase pokedex ha de almacenar a estos pokemons y su informacion y tambien hemos de desarrollar una clase combat, en la que se desarrolle el combate
por tanto tendremos que pasarle los dos pokemons contrincante y realizaremos una funcion de combate que nos devolvera el daño que se haran cada uno 
dependiendo de su tipo, llamada ```combate``` y una funcion start que sera la encargadad de llevar toda la simulacion de combate.

### Clase pokemon

```
export class Pokemon {
  constructor(protected name: string, protected peso: number, protected altura: number, protected tipo: string, protected ataque: number, protected defensa: number, protected velocidad: number, protected damage: number) {

  }
  getName(): string {
    return this.name;
  }
  getPeso(): number {
    return this.peso;
  }
  getAltura(): number {
    return this.altura;
  }
  getTipo(): string {
    return this.tipo;
  }
  getAtaque(): number {
    return this.ataque;
  }
  getDefensa(): number {
    return this.defensa;
  }
  getVelocidad(): number {
    return this.velocidad;
  }
  getDamage(): number {
    return this.damage;
  }
  setName(name_ : string) {
    this.name = name_;
  }
  setPeso(peso_ : number) {
    this.peso = peso_;
  }
  setAltura(altura_ : number) {
    this.altura = altura_;
  }
  setTipo(tipo_ : string) {
    this.tipo = tipo_;
  }
  setAtaque(ataque_ : number) {
    this.ataque = ataque_;
  }
  setDefensa(defensa_ : number) {
    this.defensa = defensa_;
  }
  setVelocidad(velocidad_ : number) {
    this.velocidad = velocidad_;
  }
  setDamage(damage_ : number) {
    this.damage = damage_;
  }
}
```

En esta clase hemos de utilizar un constructor con todas las caracteristicas dichas con aterioridad, estas caractaristicas estan puestas en protected pues vamos a accede a ellas mediante funciones de la clase que
nos permitan coger esos valores del objeto pokemon, a su vez aunque no los llegue a usar he puesto unos set para lo mismo para poder modificar esos valores en caso de que fuera necesario.

### Clase Pokedex

```
import {Pokemon} from '../pokemon/pokemon';
export class Pokedex {
  constructor(protected pokemons: Pokemon[]) {

  }
  getPokemons(): Pokemon[] {
    return this.pokemons;
  }
}
```

En esta clase hemos de crear un array de pokemons ya que sera ahi donde almacenaremos, al igual que en una pokedex , los pokemons que se creen y su informacion, y accrederemos a esa variable a travez de una funcion como en la clase anterior

### Clase Combat

```
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
```

En esta clas combat hemos de pasar 2 pokemons que seran los contrincantes, como en los anteriores podemos acceder a estas variables a travez de una funcion get, tambien tenemos una funcion combate que al igual que en un  a practica anterior vamos comprobando el tipo del primer pokemon que se pasa a esta funcion y comparandolo con el segundo para poder calcular el daño qeu se hara en cada iteracion del turno de combate.
Siguiente a esto nos encntramos con la funcion start que nos permitira realizar una simulacion del combate a travez de un bucle que nos iterara mientras la vida de ambos pokemon no sea 0, si alguna vida llegara a 0 se romperia ese bucle y se mostraria el ganador y se acabaria el programa, dentro del bucle hacemos una llamada a la funcion combate con los pokemon en el orden que queramos empezar el combate y despues repetimos con los pokemon cambiados para completar asi un turno y conseguir los daños y los calculos necesarios para llevar a cabo el combate.