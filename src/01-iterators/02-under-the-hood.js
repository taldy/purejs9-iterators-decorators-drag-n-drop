let iterator;
const str = 'Домашка!';

function init() {
  console.log('iterator funtion', str[Symbol.iterator]);

  iterator = str[Symbol.iterator]();
  console.log('iterator object', iterator);
}

function next() {
  console.log('step:', iterator.next());
}

function run() {
  for (let char of str) {
    console.log('char: ', char);
  }
}

document.querySelector('#container2 .init').addEventListener('click', init);
document.querySelector('#container2 .next').addEventListener('click', next);
document.querySelector('#container2 .run').addEventListener('click', run);
