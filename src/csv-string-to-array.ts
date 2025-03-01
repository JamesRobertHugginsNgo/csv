export default function csvStringToArray(csv: string): string[][] {
	const rows: string[][] = [];
	let cols: string[] = [];
	let col: string[] = [];

	const pushCols: () => void = () => {
		cols.push(col.join('').trim());
		col = [];
	}
	const pushRows: () => void = () => {
		pushCols();
		rows.push(cols);
		cols = [];
	}

	let isInQuote: boolean = false;

	const length: number = csv.length;
	for (let index: number = 0; index < length; index++) {
		const char: string = csv[index];

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
	const lastIndex: number = rows.length - 1;
	if (lastIndex > -1 && rows[lastIndex].length === 1 && rows[lastIndex][0] === '') {
		rows.pop();
	}

	return rows;
}
