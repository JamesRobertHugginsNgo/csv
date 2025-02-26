export default function csvArrayToJson(rows: string[][] = []): { [key: string]: string }[] {
	const result: { [key: string]: string }[] = [];

	const length: number = rows.length;
	for (let index: number = 1; index < length; index++) {
		const cols = rows[index].reduce((acc: { [key: string]: string }, cur: string, idx: number): { [key: string]: string } => {
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
