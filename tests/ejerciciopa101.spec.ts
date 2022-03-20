/**
 * @param numero_racional numero racional 1
 * @param numero_racional2 numero racional 2
 */
import 'mocha';
import {expect} from 'chai';
import {NumeroRa} from '../src/ejerciciopa101';

// eslint-disable-next-line new-cap
// eslint-disable-next-line camelcase
// eslint-disable-next-line camelcase
const numero_racional = new NumeroRa(4, 8);

describe('Inicializacion e numero racional', () => {
  it('inicializacion de clase numaro raciona', () =>{
    expect(numero_racional).to.not.be.equal(null);
  });
  it('get numerador', ()=>{
    // eslint-disable-next-line camelcase
    expect(numero_racional.getNumerador()).to.be.equal(4);
  });
  it('get denominar', ()=>{
    // eslint-disable-next-line camelcase
    expect(numero_racional.getdenominador()).to.be.equal(8);
  });
  it('coger numero racional', ()=>{
    // eslint-disable-next-line camelcase
    expect(numero_racional.getracional()).to.be.equal("4/8");
  });
  it('simplificar numero raciona', () =>{
    // eslint-disable-next-line camelcase
    expect(numero_racional.simpli()).to.be.equal("1/2");
  });
});
