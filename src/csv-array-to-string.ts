/* BOILERPLATE */

export default function csvArrayToString(rows: string[][]): string {
	return rows.map((cols) => {
		return cols.map((col) => {
			col = col.trim().replaceAll('"', '""');
			if (col.includes('\n') || col.includes(',')) {
				col = `"${col}"`;
			}
			return col;
		}).join(',');
	}).join('\n');
}
