import submitForm from './submitForm';

/**
 * How mocking fetch works
 * @link https://www.npmjs.com/package/jest-fetch-mock#simple-mock-and-assert
 */
describe('testing api', () => {
	function APIRequest(who) {
		if (who === 'facebook') {
			return fetch('https://facebook.com');
		} else {
			return fetch('https://google.com');
		}
	}
	beforeEach(() => {
		fetch.resetMocks();
	});

	it('calls google and returns data to me', () => {
		fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
		APIRequest('google').then(res => {
			expect(JSON.parse(res.body).data).toEqual('12345');
		});

		//assert on the times called and arguments given to fetch
		expect(fetch.mock.calls.length).toEqual(1);
		expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
	});
});

describe('submitForm', () => {
	const fieldValues = {
		fld1: 1,
		firstName: 'Thor'
	};

	beforeEach(() => {
		fetch.resetMocks();
	});

	const apiRootUri = 'https://something.com/wp-json/caldera-api';
	const formId = 'cf1';
	const eventOptions = {
		apiRootUri,
		formId
	};

	it('calls fetch with the right url', () => {
		submitForm(fieldValues, eventOptions, fetch);
		expect(fetch.mock.calls[0][0]).toEqual(
			'https://something.com/wp-json/caldera-api/v1/entries'
		);
	});

	it('calls fetch with the field values in body', () => {
		submitForm(fieldValues, eventOptions, fetch);
		expect(JSON.parse(fetch.mock.calls[0][1].body).entryValues).toEqual({
			firstName: 'Thor',
			fld1: 1
		});
	});

	it('calls fetch with PUT HTTP method', () => {
		submitForm(fieldValues, eventOptions, fetch);
		expect(fetch.mock.calls[0][1].method).toEqual('PUT');
	});

	it('calls fetch with headers', () => {
		submitForm(fieldValues, eventOptions, fetch);
		expect(typeof fetch.mock.calls[0][1].headers).toEqual('object');
	});

	it('Adds token to fetch headers', () => {
		const token = 'dsjdfs-2dsa';
		submitForm(
			fieldValues,
			{
				apiRootUri,
				formId,
				token
			},
			fetch
		);
		expect(fetch.mock.calls[0][1].headers['X-CWP-TOKEN']).toEqual(token);
	});
});
