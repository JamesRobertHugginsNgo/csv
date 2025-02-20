import csvJsonToArray from '../src/csv-json-to-array.js';

const jsonEl = document.getElementById('json');
const rowsEl = document.getElementById('rows');

document.getElementById('transform').addEventListener('click', () => {
	rowsEl.value = JSON.stringify(csvJsonToArray(JSON.parse(jsonEl.value)), null, '\t');
});

document.getElementById('clear').addEventListener('click', () => {
	rowsEl.value = '';
});
