import { canban } from '../canban';

function cardsIterator(obj) {
  return {
    ...obj,
    [Symbol.iterator]: function() {
      const columns = this.columns;
      let columnIndex = 0;
      let cardIndex = 0;

      return {
        next() {
          if (columns[columnIndex] && columns[columnIndex].cards[cardIndex]) {
            const response = {
              done: false,
              value: columns[columnIndex].cards[cardIndex]
            };

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
      };
    }
  };
}

function columnsIterator(obj) {
  return {
    ...obj,
    [Symbol.iterator]: function() {
      const columns = this.columns;
      let columnIndex = 0;

      return {
        next() {
          if (columns[columnIndex]) {
            const { cards, ...column } = columns[columnIndex];

            const response = {
              done: false,
              value: column,
            };

            columnIndex++;

            return response;
          } else {
            return { done: true };
          }
        }
      };
    }
  };
}

function showCards() {
  for (let card of cardsIterator(canban)) {
    console.log('card: ', card);
  }
}

function showColumns() {
  for (let column of columnsIterator(canban)) {
    console.log('column: ', column);
  }
}

document.querySelector('#container2 .cards').addEventListener('click', showCards);
document.querySelector('#container2 .columns').addEventListener('click', showColumns);
