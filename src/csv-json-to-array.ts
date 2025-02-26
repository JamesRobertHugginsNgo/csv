export default function csvJsonToArray(json: { [key: string]: string }[]): string[][] {
	const rows: string[][] = [[]];

	const length: number = json.length;
	for (let index: number = 1; index < length; index++) {
		const cols: any[] = [];

		for (const key in json[index]) {
			if (!rows[0].includes(key)) {
				rows[0].push(key);
			}
			cols[rows[0].indexOf(key)] = json[index][key];
		}

		rows.push(cols);
	}

	return rows;
}
