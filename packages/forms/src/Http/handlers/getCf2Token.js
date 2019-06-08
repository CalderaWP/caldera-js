/**
 * Get tokens to submit form with
 *
 * @param apiRootUri
 * @param formId
 * @param  axios
 * @return {Promise<any>}
 */
export default async function getCf2Token(apiRootUri, formId, axios) {
	// http://dev-futurecapable.pantheonsite.io/wp-json/cf-api/v3/process/submission/CF5c9f869f3faf1/token';
	const url = `${apiRootUri}/v3/process/submission/${formId}/token`;

	return new Promise(async (resolve, reject) => {
		try {
			const response = await axios.post(
				`${apiRootUri}/v3/process/submission/${formId}/token`
			);
			resolve(response.data);
		} catch (error) {
			reject(error);
		}
	});
}
