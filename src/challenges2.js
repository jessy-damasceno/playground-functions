/* eslint-disable complexity */
/* eslint-disable sonarjs/cognitive-complexity */
// const { compareTrue } = require('./challenges');

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let phone = '(xx) xxxxx-xxxx';
  for (let i of array) {
    phone = phone.replace('x', i);
    let count = 0;
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        count += 1;
      }
      if (i > 9 || i < 0 || count >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return phone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return ((lineA + lineB) > lineC && (lineA + lineC) > lineB && (lineB + lineC) > lineA) !== false;
}

// Desafio 13
function hydrate(string) {
  let soma = 0;

  for (let index of string.match(/(\d+)/g)) {
    soma += Number(index);
  }
  if (soma === 1) {
    return '1 copo de água';
  }
  return `${soma} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
