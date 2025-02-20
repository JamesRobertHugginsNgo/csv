import csvStringToArray from '../src/csv-string-to-array.js';

const csvEl = document.getElementById('csv');
const rowsEl = document.getElementById('rows');

document.getElementById('transform').addEventListener('click', () => {
	rowsEl.value = JSON.stringify(csvStringToArray(csvEl.value), null, '\t');
});

document.getElementById('clear').addEventListener('click', () => {
	rowsEl.value = '';
});
