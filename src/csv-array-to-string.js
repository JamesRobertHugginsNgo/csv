export default function csvArrayToString(rows) {
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
