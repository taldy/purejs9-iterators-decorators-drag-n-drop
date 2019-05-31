import moment from 'moment';

const format = 'DD.MM.YYYY';

function dateRange(start, end) {
  return {
    [Symbol.iterator]() {
      let current = moment(start, format).startOf('day');
      let endTime = moment(end, format).endOf('day');

      return {
        next() {
          if (current.unix() < endTime.unix()) {
            const result = { done: false, value: current.format(format)};
            current.add(1, 'day');

            return result;
          } else {
            return { done: true };
          }
        }
      }
    }
  }
}

function run() {
  for(let value of dateRange(startDateEl.value, endDateEl.value)) {
    console.log('date range item: ', value);
  }
}

function runSpread() {
  console.log('items: ', ...dateRange(startDateEl.value, endDateEl.value));
}

const startDateEl = document.querySelector('#container5 .start-date');
const endDateEl = document.querySelector('#container5 .end-date');
startDateEl.value = moment().startOf('month').format(format);
endDateEl.value = moment().endOf('month').format(format);

document.querySelector('#container5 .run').addEventListener('click', run);
document.querySelector('#container5 .run-spread').addEventListener('click', runSpread);
