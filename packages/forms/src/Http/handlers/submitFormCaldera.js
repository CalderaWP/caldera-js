/**
 * Default form submission handler
 *
 * @param fieldValues
 * @param eventOptions
 * @param fetch
 * @return {*}
 */
export default function submitFormCaldera(fieldValues, eventOptions, fetch) {
	const { apiRootUri, formId, token } = eventOptions;
	const entryValues = [];
	Object.keys(fieldValues).forEach(fieldId => {
		entryValues.push({
			fieldId: fieldValues[fieldId],
		});
	});
	const url = `${apiRootUri}/v1/entries`;
	return fetch(url, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			'X-CWP-TOKEN': token,
		},
		body: JSON.stringify({
			formId,
			entryValues: fieldValues,
		}),
	});
}
