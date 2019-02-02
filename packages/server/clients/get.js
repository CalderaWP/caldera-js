let fetch = '';
function get(url) {
	return fetch(url)
		.then(response => {
			if (response.ok) {
				const contentType = response.headers.get('Content-Type') || '';
				if (contentType.includes('application/json')) {
					return response.json().catch(error => {
						return Promise.reject(
							new fetch.ResponseError(
								'Invalid JSON: ' + error.message
							)
						);
					});
				}

				if (contentType.includes('text/html')) {
					return response
						.text()
						.then(html => {
							return {
								page_type: 'generic',
								html: html
							};
						})
						.catch(error => {
							return Promise.reject(
								new fetch.ResponseError(
									'HTML error: ' + error.message
								)
							);
						});
				}

				return Promise.reject(
					new fetch.ResponseError(
						'Invalid content type: ' + contentType
					)
				);
			}

			if (response.status == 404) {
				return Promise.reject(
					new fetch.NotFoundError('Page not found: ' + url)
				);
			}

			return Promise.reject(
				new fetch.HttpError('HTTP error: ' + response.status)
			);
		})
		.catch(error => {
			return Promise.reject(new fetch.NetworkError(error.message));
		});
}

const getHtml = async (url, args) => {
	const { html } = await get(url);
	return html;
};

const getJson = async (url, args) => {
	return await get(url);
};

module.exports = (env, suppliedFetch) => {
	fetch = suppliedFetch || require('isomorphic-fetch');
	return {
		get,
		getHtml,
		getJson
	};
};
