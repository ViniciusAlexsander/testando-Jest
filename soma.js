function soma(a, b) {
  if(a != null && b != null)
    return a + b;
  else
    throw new Error('Não pode somar com null');
}
module.exports = soma;