import {collectFieldValues} from '@calderawp/components';

/**
 * Given a Caldera Layout for a form, grab all field values
 *
 * @todo memoize
 *
 * @param {*} rows All rows of layout
 */
export const getValuesFromFormLayout = rows => {
	let values = {};
	rows.map(formRow => {
		const { columns } = formRow;
		columns.map(column => {
			const { fields } = column;
			values = {
				...values,
				...collectFieldValues(fields)
			};
		});
	});
	return values;
};
