import csvArrayToJson from '../src/csv-array-to-json.js';

const rowsEl = document.getElementById('rows');
const jsonEl = document.getElementById('json');

console.log(rowsEl, jsonEl);

document.getElementById('transform').addEventListener('click', () => {
	console.log('click');
	jsonEl.value = JSON.stringify(csvArrayToJson(JSON.parse(rowsEl.value)), null, '\t');
});

document.getElementById('clear').addEventListener('click', () => {
	jsonEl.value = '';
});
