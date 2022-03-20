/**
 * En esta clase definiremos un pokemon con las diferentes caracteristicas: nombre, peso, tipo, ataque, defensa, valocidad, damage(HP) y todos os pokemons creados seguiran estos requisitos para su uso
 * 
 * @param name nombre del pokemon
 * @param peso peso del pokemon
 * @param altura altura del pokemon
 * @param tipo tipo del pokemon
 * @param ataque ataque del pokemon
 * @param defensa defensa del pokemon
 * @param velocidad velocidad del pokemon
 * @param damage vida del pokemon
 * @param getName funcion para conseguir el nombre del pokemon
 * @param getPeso funcion para conseguir el peso del pokemon
 * @param getAltura funcion para conseguir la altura del pokemon
 * @param getTipo funcion para conseguir el tipo del pokemon
 * @param getAtaque funcion para conseguir el ataque del poquemon
 * @param getDefensa funcion para conseguir la defensa del pokemon
 * @param getVelocidad funcion para conseguir la velocidad el pokemon
 * @param getDamage funcion para conseguir la vida del pokemon
 * @param setName funcion que nos permitiria cambiar el nombre del pokemon
 * @param setPeso funcion que nos permitiria cambiar el peso del pokemon
 * @param setAltura funcion que nos permitiria cambiar la altura del pokemon
 * @param setTipo funcion que nos permitiria cambiar el tipo del pokemon
 * @param setAtaque funcion que nos permitiria cambiar el ataque del pokemon
 * @param setDefensa funcion que nos permitiria cambiar la defensa del pokemon
 * @param setVelocidad funcion que nos permitiria cambiar la velocidad del pokemon
 * @param setDamage funcion que nos permitiria cambiar la vida del pokemon
 */
// eslint-disable-next-line max-len
export class Pokemon {
  // eslint-disable-next-line max-len
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
