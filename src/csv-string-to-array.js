/* BOILERPLATE */

export default function csvStringToArray(csv) {
	const rows = [];
	let cols = [];
	let col = [];

	const pushCols = () => {
		cols.push(col.join('').trim());
		col = [];
	}
	const pushRows = () => {
		pushCols();
		rows.push(cols);
		cols = [];
	}

	let isInQuote = false;

	const length = csv.length;
	for (let index = 0; index < length; index++) {
		const char = csv[index];

		if (char == '"') {
			isInQuote = !isInQuote;
			if (index > 0 && csv[index - 1] === '"') {
				col.push(char);
			}
			continue
		}

		if (!isInQuote) {
			if (char === '\n') {
				pushRows();
				continue;
			}

			if (char === ',') {
				pushCols();
				continue;
			}
		}

		col.push(char);
	}

	pushRows();
	const lastIndex = rows.length - 1;
	if (lastIndex > -1 && rows[lastIndex].length === 1 && rows[lastIndex][0] === '') {
		rows.pop();
	}

	return rows;
}
