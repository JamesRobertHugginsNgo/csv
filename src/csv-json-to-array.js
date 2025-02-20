/* BOILERPLATE */

export default function csvJsonToArray(json) {
	const rows = [[]];

	const length = json.length;
	for (let index = 1; index < length; index++) {
		const cols = [];

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
