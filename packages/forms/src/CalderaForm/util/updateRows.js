import {ConditionalState} from '../state/ConditionalState';


const findFieldById = (fieldId, fields) => {
	if (-1 !== fields.findIndex(f => f.fieldId === fieldId)) {
		return fields.find(f => f.fieldId === fieldId);
	}
};

/**
 *
 * @param {ConditionalState} newState
 * @param {Array} rows
 * @return {Array}
 */
export const updateRows = (newState, rows, fields) => {
	const outputRows = [];
	rows.forEach(row => {

		if (! row.render) {
			const {rowId} = row;
			let outputRow = {
				rowId: rowId,
				columns: []
			};
			if (row.columns) {
				row.columns.forEach(column => {
					if (! column.render) {
						let outputColumn = {
							fields: [],
						};
						if (column.fields) {
							column.fields.forEach(field => {
								if (field) {
									if (!field.render) {
										if ('string' === typeof field) {
											const _field = findFieldById(field, fields);
											if (_field) {
												field = _field;
											}
										}
										if (field.hasOwnProperty('fieldId')) {
											if (!newState.isFieldHidden(field.fieldId)) {
												outputColumn.fields.push(field);
											}
										}
									} else {
										outputColumn.fields.push(field);
									}
								}
							});
						}
						outputRow.columns.push(outputColumn)
					} else {
						outputRow.columns.push(column)
					}
				});
			}
			outputRows.push(outputRow);
		}else{
			outputRows.push(row);
		}

	});

	return outputRows;
};
