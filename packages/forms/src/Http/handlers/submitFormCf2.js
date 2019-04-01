/**
 * Default form submission handler
 *
 * @param fieldValues
 * @param eventOptions
 * @param fetch
 * @return {*}
 */
export default function submitFormCf2(fieldValues, eventOptions, fetch) {
	const { apiRootUri, formId } = eventOptions;
	let {  _cf_verify, _sessionPublicKey } = eventOptions;
	const entryValues = [];
	Object.keys(fieldValues).forEach(fieldId => {
		if( '_sessionPublicKey' === fieldId ) {
			_sessionPublicKey = fieldValues[fieldId];
		}else if( '_cf_verify' === fieldId ){
			_cf_verify = fieldValues[fieldId];
		}else {
			entryValues.push({
				fieldId: fieldValues[fieldId]
			});
		}

	});
	//http://localhost:8228/wp-json/cf-api/v3/process/submission/CF5c9f8b765badd
	const url = `${apiRootUri}/v3/process/submission/${formId}`;
	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			formId,
			_sessionPublicKey,
			_cf_verify,
			entryValues: fieldValues
		})
	});
}
