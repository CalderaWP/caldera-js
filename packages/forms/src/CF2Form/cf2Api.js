import getCf2Token from "../Http/handlers/getCf2Token";
import handleFormSubmitCf2 from "../Http/handlers/handleFormSubmitCf2";

async function cf2Api(apiRootUri, formId, axios) {

	return {
		getCf2Token,
		handleFormSubmitCf2(
			{
				entryValues,
				tokens,
			}
		) {
			return handleFormSubmitCf2({
				apiRootUri,
				formId,
				entryValues,
				tokens,
				axios
			})
		}
	}

}

export default cf2Api;
