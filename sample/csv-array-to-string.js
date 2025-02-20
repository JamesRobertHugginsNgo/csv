import csvArrayToString from '../src/csv-array-to-string.js';

const rowsEl = document.getElementById('rows');
const csvEl = document.getElementById('csv');

console.log(rowsEl, csvEl);

document.getElementById('transform').addEventListener('click', () => {
	console.log('click');
	csvEl.value = csvArrayToString(JSON.parse(rowsEl.value));
});

document.getElementById('clear').addEventListener('click', () => {
	csvEl.value = '';
});
