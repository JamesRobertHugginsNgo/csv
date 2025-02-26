export default function csvArrayToString(rows: string[][]): string {
	return rows.map((cols: string[]) => {
		return cols.map((col: string) => {
			col = col.trim().replaceAll('"', '""');
			if (col.includes('\n') || col.includes(',')) {
				col = `"${col}"`;
			}
			return col;
		}).join(',');
	}).join('\n');
}
