/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
// Projeto Playground Functions de Jessy Damasceno

// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(string) {
  return `${string[string.length - 1]}, ${string[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  array.sort(function (a, b) {
    return b - a;
  });

  let count = 0;

  for (let i in array) {
    if (array[0] === array[i]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(array) {
  for (let i in array) {
    if (array[i] % 15 === 0) {
      array[i] = 'fizzBuzz';
    } else if (array[i] % 3 === 0 && array[i] % 5 !== 0) {
      array[i] = 'fizz';
    } else if (array[i] % 3 !== 0 && array[i] % 5 === 0) {
      array[i] = 'buzz';
    } else {
      array[i] = 'bug!';
    }
  }
  return array;
}

// function ifFizzBuzz(number) {
//   if (number % 15 === 0) {
//     return 'fizzBuzz';
//   }
//   if (number % 3 === 0) {
//     return 'fizz';
//   }
//   if (number % 5 === 0) {
//     return 'buzz';
//   }
//   return 'bug!';
// }

// Desafio 9
function encode(string) {
  return string.replaceAll('a', '1')
    .replaceAll('e', '2')
    .replaceAll('i', '3')
    .replaceAll('o', '4')
    .replaceAll('u', '5');
}

function decode(string) {
  return string.replaceAll('1', 'a')
    .replaceAll('2', 'e')
    .replaceAll('3', 'i')
    .replaceAll('4', 'o')
    .replaceAll('5', 'u');
}

// Desafio 10
function techList(tecnologias, nome) {
  tecnologias.sort();

  if (tecnologias.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < tecnologias.length; i += 1) {
    tecnologias[i] = { tech: tecnologias[i], name: nome };
  }

  return tecnologias;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
