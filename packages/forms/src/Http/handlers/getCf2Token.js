/**
 * Get tokens to submit form with
 *
 * @param apiRootUri
 * @param formId
 * @param  fetch
 * @return {Promise<any>}
 */
export default function getCf2Token(apiRootUri, formId, fetch){
	// http://dev-futurecapable.pantheonsite.io/wp-json/cf-api/v3/process/submission/CF5c9f869f3faf1/token';
	const url = `${apiRootUri}/v3/process/submission/${formId}/token`;

	return new Promise(function (resolve, reject) {
		fetch(url, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			}
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
