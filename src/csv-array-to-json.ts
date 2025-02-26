export default function csvArrayToJson(rows: string[][] = []): object[] {
	const result: object[] = [];

	const length: number = rows.length;
	for (let index: number = 1; index < length; index++) {
		const cols = rows[index].reduce((acc: object, cur: string, idx: number): object => {
			const key: string = rows[0][idx];
			if (key) {
				acc[key] = cur;
			}
			return acc;
		}, {});
		result.push(cols);
	}

	return result;
}
