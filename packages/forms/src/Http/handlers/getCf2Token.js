/**
 * Get tokens to submit form with
 *
 * @param apiRootUri
 * @param formId
 * @param  fetch
 * @return {Promise<any>}
 */
export default function getCf2Token(apiRootUri, formId, fetch){

	const url = `${apiRootUri}/v3/process/submission/${formId}/token`;

	return new Promise(function (resolve, reject) {
		fetch(url, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				formId,
				_sessionPublicKey,
				_cf_verify,
				entryValues: fieldValues
			})
		}).then(r => r.json())
			.then(r => {
				resolve(
					{
						_cf_verify: r._cf_verify,
						_sessionPublicKey: r._sessionPublicKey
					}
				);
			})
			.catch(e=> {
				reject(e)
			});

	});

}
