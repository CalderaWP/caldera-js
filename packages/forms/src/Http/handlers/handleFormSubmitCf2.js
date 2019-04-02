/**
 * Handler for submitting forms to a WordPress site in CF2 mode
 *
 * @param apiRootUri
 * @param formId
 * @param entryValues
 * @param tokens
 * @param axios
 * @return {Promise<*>}
 */
export default async function handleFormSubmitCf2(
	{
		apiRootUri,
		formId,
		entryValues,
		tokens,
		axios
	}) {
	try {
		const response = await axios.request({
			url: `${apiRootUri}/v3/process/submission/${formId}`,
			method: 'POST',
			data: {
				formId,
				_sessionPublicKey:
				tokens._sessionPublicKey,
				_cf_verify:
				tokens._cf_verify,
				entryValues
			}
		});
		return response;

	} catch (error) {
		console.error(error);
	}
}
