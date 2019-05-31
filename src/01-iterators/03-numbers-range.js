let range = {
  from: 6,
  to: 34
};

function init() {
  range[Symbol.iterator] = function() {
    let current = this.from;
    const to = this.to;

    return {
      next() {
        return current <= to ? { done: false, value: current++} : { done: true };
      }
    }
  };
}

function run() {
  for(let value of range) {
    console.log('range item: ', value);
  }
}


document.querySelector('#container3 .init').addEventListener('click', init);
document.querySelector('#container3 .run').addEventListener('click', run);
