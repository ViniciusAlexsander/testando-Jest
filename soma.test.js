const soma = require('./soma');
test('somar 2 + 2, deve ser igual a 4', () => {
  expect(soma(2,2)).toBe(4);
  expect(soma(2,2)).toBeGreaterThan(3);
  expect(soma(2,2)).toBeGreaterThanOrEqual(3.5);
  expect(soma(2,2)).toBeLessThan(5);
  expect(soma(2, 2)).toBeLessThanOrEqual(4.5);
  expect(soma(2,2)).not.toBeNull();
});

test('somar 2 + null, deve lançar exceção', () => {
  expect(() => soma(2,null)).toThrow('Não pode somar com null');
});