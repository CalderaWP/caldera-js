import FormClient from "./FormClient";
import submitFormCaldera from "./handlers/submitFormCaldera";

/**
 *
 * @param {{
 *     id: {string}
 *     fieldValues: {object}
 * }} form
 * @param {string} apiRootUri
 * @param {string}type
 * @param {object }handlers
 * @param {fetch} fetch
 * @return {Proxy}
 */
export const formClientFactory = (
	form,
	apiRootUri,
	type = "caldera",
	handlers = {},
	fetch = window.fetch
) => {
	switch (type) {
		case "caldera":
		default:
			if (!handlers.hasOwnProperty("submitForm")) {
				handlers.submitForm = submitFormCaldera;
			}
			return new FormClient(form, {
				apiRootUri,
				fetch,
				...handlers,
			});
	}
};
