import { useState } from 'react';

/**
 * Hook for managing state of the form tokens
 *
 * @param initialFormId
 * @return {*[]}
 */
export const useCf2FormTokens = initialFormId => {
	const [tokensFetched, setTokensFetched] = useState(false);
	const [formId, setFormId] = useState(initialFormId);
	const [tokens, setTokens] = useState({
		_cf_verify: '',
		_sessionPublicKey: '',
	});

	const updateTokens = ({ _cf_verify, _sessionPublicKey }) => {
		setTokens({
			_cf_verify,
			_sessionPublicKey,
		});
	};
	return [tokens, updateTokens, tokensFetched, setTokensFetched];
};
