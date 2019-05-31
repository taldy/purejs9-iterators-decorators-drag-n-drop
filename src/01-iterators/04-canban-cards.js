import { canban } from '../canban';

canban[Symbol.iterator] = function() {
  const columns = this.columns;
  let columnIndex = 0;
  let cardIndex = 0;

  return {
    next() {
      if (columns[columnIndex] && columns[columnIndex].cards[cardIndex]) {
        const response = {
          done: false,
          value: columns[columnIndex].cards[cardIndex],
        }

        if (cardIndex < columns[columnIndex].cards.length - 1) {
          cardIndex++;
        } else {
          columnIndex++;
          cardIndex = 0;
        }

        return response;
      } else {
        return { done: true };
      }
    }
  }
};

function run() {
  for(let card of canban) {
    console.log('card: ', card);
  }
}

document.querySelector('#container4 .run').addEventListener('click', run);
