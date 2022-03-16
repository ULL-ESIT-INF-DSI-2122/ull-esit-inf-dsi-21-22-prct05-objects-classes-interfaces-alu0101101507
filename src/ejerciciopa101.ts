/**
 * 
 * Diseñe una clase con las propiedades y métodos necesarios para poder operar con números racionales. Incorpore una metodología TDD/BDD para incorporar las siguientes especificaciones en su clase de manera incremental:
 * Un número racional está formado por un numerador y un denominador, ambos números enteros.
 * Un número racional no puede tener un denominador igual a cero.
 * Un número racional debe poder simplificarse. Por ejemplo, la simplificación del racional 4/8 sería el racional 1/2.
 * Un número racional debe poder invertirse. Por ejemplo, el inverso del racional 3/5 es el racional 5/3.
 * Dos números racionales deben poder sumarse.
 * Dos números racionales deben poder restarse.
 * Dos números racionales deben poder multiplicarse.
 * Dos números racionales deben poder dividirse.
 * Se debe poder imprimir un número racional por la consola.
 * Se debe poder obtener el equivalente a un número racional como un número en notación de punto fijo, cuyo número de decimales debe ser un argumento.
 * 
 * 
 * @param numeroRa Clase que deine un numero racional
 * @param numerador numerador del numero racional
 * @param denominador denominador del numero racional
 * 
 */
export class numeroRa {
  // eslint-disable-next-line max-len
  constructor(protected numerador: number, protected denominador:number) {
  }
  getracional(): string {
    return this.numerador +"/"+ this.denominador;
  }
  getNumerador(): number {
    return this.numerador;
  }
  getdenominador(): number {
    return this.denominador;
  }
  simpli(): string {
    // eslint-disable-next-line max-len
    return (Math.floor(this.numerador/this.numerador)+"/"+ Math.floor(this.denominador/this.numerador));
  }
  invertir(): string {
    return this.denominador+"/"+this.numerador;
  }
  suma(): number {
    const aux:number = +this.getracional;
    return aux+aux;
  }
}
