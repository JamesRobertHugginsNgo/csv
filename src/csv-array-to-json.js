export default function csvArrayToJson(rows) {
	const result = [];

	const length = rows.length;
	for (let index = 1; index < length; index++) {
		const cols = rows[index].reduce((acc, cur, idx) => {
			const key = rows[0][idx];
			if (key) {
				acc[key] = cur;
			}
			return acc;
		}, {});
		result.push(cols);
	}

	return result;
}
