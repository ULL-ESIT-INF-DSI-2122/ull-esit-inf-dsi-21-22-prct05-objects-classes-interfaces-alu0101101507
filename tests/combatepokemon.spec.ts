/**
 * Pruebas unitarias y tdd de cada una de las clases creadas
 * @param Pokemon1 pokemon para ser utilizado en las pruebas
 * @param Pokemon2 pokemon para ser utilizado en las pruebas
 * @param Pokedex1 pokedex para ser utilizada en las pruebas
 * @param Poke variable que nos usa la clase combate
 */
import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/pokemon/pokemon';
import {Pokedex} from '../src/pokedex/pokedex';
import {Combat} from '../src/combat/combat';

const Pokemon1 = new Pokemon("Charizard", 90.5, 1.7, "fuego", 84, 78, 100, 780);
const Pokemon2 = new Pokemon("Blastoise", 85.5, 1.6, "agua", 83, 100, 78, 790);
const Pokedex1 = new Pokedex([Pokemon1, Pokemon2]);
const Poke = new Combat(Pokemon1, Pokemon2);

describe('pokemon', () => {
  it('existe pokemon', () =>{
    expect(Pokemon1).to.not.be.eq(null);
  });
  it('getName', () =>{
    expect(Pokemon1.getName()).be.eq("Charizard");
  });
  it('getPeso', () =>{
    expect(Pokemon1.getPeso()).be.eq(90.5);
  });
  it('getAltura', () =>{
    expect(Pokemon1.getAltura()).be.eq(1.7);
  });
  it('getTipo', () =>{
    expect(Pokemon1.getTipo()).be.eq("fuego");
  });
  it('getAtaque', () =>{
    expect(Pokemon1.getAtaque()).be.eq(84);
  });
  it('getDefensa', () =>{
    expect(Pokemon1.getDefensa()).be.eq(78);
  });
  it('getVelocidad', () =>{
    expect(Pokemon1.getVelocidad()).be.eq(100);
  });
  it('getDamage(HP)', () =>{
    expect(Pokemon1.getDamage()).be.eq(780);
  });
});

describe('pokedex', () => {
  it('existe pokedex', () =>{
    expect(Pokedex1).to.not.be.eq(null);
  });
  it('getpokemons', () =>{
    expect(Pokedex1.getPokemons()).to.be.eql([Pokemon1, Pokemon2]);
  });
});

describe('combat', () => {
  it('getPokemon1', () =>{
    expect(Poke.getPokemon1()).to.be.eq(Pokemon1);
  });
  it('getPokemon2', () =>{
    expect(Poke.getPokemon2()).be.eql(Pokemon2);
  });
  it('combate', () =>{
    expect(Poke.combate(Pokemon1, Pokemon2)).to.be.eql(21);
  });
  it('start', () =>{
    expect(Poke.start()).to.be.eql(undefined);
  });
});

