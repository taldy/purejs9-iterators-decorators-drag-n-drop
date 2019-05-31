function sum(a, b) {
  return a + b;
}

function getNotUniqueSymbols(str) {
  const symbols = {};

  str.split('').forEach(symbol => {
    symbols[symbol] = symbols[symbol] || 0;
    symbols[symbol]++;
  });

  return Object.keys(symbols).filter(symbol => symbols[symbol] > 1);
}

function log(fn, name = 'log') {
  return function(...args) {
    console.log(`${name}.arguments: `, ...args);
    const result = fn(...args);
    console.log(`${name}.result: `, result);
    return result;
  }
}


document.querySelector('#container1 .sum').addEventListener('click', () => {
  const result = sum(2, 5);

  console.log('sum', result);
});

document.querySelector('#container1 .decorated-sum').addEventListener('click', () => {
  const decoratedSum = log(sum);

  const result = decoratedSum(2, 5);
  console.log('decorated sum', result);
});


document.querySelector('#container1 .symbols').addEventListener('click', () => {
  const result = getNotUniqueSymbols('Виконуйте домашку!');

  console.log('getNotUniqueSymbols', result);
});

document.querySelector('#container1 .decorated-symbols').addEventListener('click', () => {
  const decoratedGetNotUniqueSymbols = log(getNotUniqueSymbols, 'customised console prefix');

  const result = decoratedGetNotUniqueSymbols('Виконуйте домашку!');
  console.log('decorated getNotUniqueSymbols', result);
});
