console.log('iterators');

function arrayIterator() {
  let arr = [1,2,3,4,5,6,7,8];

  for (let item of arr) {
    console.log('item: ', item);
  }
}

function stringIterator() {
  const str = 'Виконуйте домашку!';

  for(let char of str) {
    console.log('char: ', char);
  }
}

function domCollectionIterator() {
  for(let el of document.querySelectorAll('div')) {
    console.log('element: ', el);
  }
}

document.querySelector('#container1 .run-array').addEventListener('click', arrayIterator);
document.querySelector('#container1 .run-string').addEventListener('click', stringIterator);
document.querySelector('#container1 .run-dom-collection').addEventListener('click', domCollectionIterator);
