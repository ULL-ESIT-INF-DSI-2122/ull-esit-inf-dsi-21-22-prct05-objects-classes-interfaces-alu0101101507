/**
 * @param numero_racional numero racional 1
 * @param numero_racional2 numero racional 2
 */
import 'mocha';
import {expect} from 'chai';
import {numeroRa} from '../src/ejerciciopa101';

// eslint-disable-next-line new-cap
let numero_racional = new numeroRa(4, 8);
let numero_racional2 = new numeroRa(1,2);

describe('Inicializacion e numero racional', () => {
  it('inicializacion de clase numaro raciona', () =>{
    expect(numero_racional).to.not.be.equal(null);
  });
  it('get numerador', ()=>{
    expect(numero_racional.getNumerador()).to.be.equal(4);
  });
  it('get denominar', ()=>{
    expect(numero_racional.getdenominador()).to.be.equal(8);
  });
  it('coger numero racional', ()=>{
    expect(numero_racional.getracional()).to.be.equal("4/8");
  });
  it('simplificar numero raciona', () =>{
    expect(numero_racional.simpli()).to.be.equal("1/2");
  });
  it('suma de dos raiconales', () => {
    // eslint-disable-next-line max-len
    expect((numero_racional.getracional(),numero_racional2.getracional())).to.be.equal("");
  });
});
