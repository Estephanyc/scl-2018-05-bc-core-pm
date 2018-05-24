
describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
  
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 33),'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });

    it('debería retornar "QF KNJXYF XJWF JQ OZJAJX" para "La fiesta sera el jueves" con offset 5', () => {
      assert.equal(cipher.encode('La fiesta sera el jueves', 5), 'QF KNJXYF XJWF JQ OZJAJX');
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });
  
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(cipher.decode('HIJKLMNOPQRSTUVWXYZABCDEFG', 33),'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    it('debería retornar "DESPUES DE LAS 8" para "IJXUZJX IJ QFX THMT" con offset 5', () => {
      assert.equal(cipher.decode('IJXUZJX IJ QFX THMT', 5), 'DESPUES DE LAS OCHO');
    });

  });

});