import submitFormCaldera from './submitFormCaldera';
import submitFormCf2 from './submitFormCf2';

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

describe('submitFormCaldera', () => {
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
		submitFormCaldera(fieldValues, eventOptions, fetch);
		expect(fetch.mock.calls[0][0]).toEqual(
			'https://something.com/wp-json/caldera-api/v1/entries'
		);
	});

	it('calls fetch with the field values in body', () => {
		submitFormCaldera(fieldValues, eventOptions, fetch);
		expect(JSON.parse(fetch.mock.calls[0][1].body).entryValues).toEqual({
			firstName: 'Thor',
			fld1: 1
		});
	});

	it('calls fetch with PUT HTTP method', () => {
		submitFormCaldera(fieldValues, eventOptions, fetch);
		expect(fetch.mock.calls[0][1].method).toEqual('PUT');
	});

	it('calls fetch with headers', () => {
		submitFormCaldera(fieldValues, eventOptions, fetch);
		expect(typeof fetch.mock.calls[0][1].headers).toEqual('object');
	});

	it('Adds token to fetch headers', () => {
		const token = 'dsjdfs-2dsa';
		submitFormCaldera(
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

describe('submitFormCf2', () => {
	const fieldValues = {
		fld1: 1,
		firstName: 'Thor'
	};

	beforeEach(() => {
		fetch.resetMocks();
	});

	const apiRootUri = 'http://localhost:8228/wp-json/cf-api';
	const formId = 'cf1';
	const eventOptions = {
		apiRootUri,
		formId
	};

	it('calls fetch with the right url', () => {
		submitFormCf2(fieldValues, eventOptions, fetch);
		expect(fetch.mock.calls[0][0]).toEqual(
			`http://localhost:8228/wp-json/cf-api/v3/process/submission/${formId}`
		);
	});

	it('calls fetch with the field values in body', () => {
		submitFormCf2(fieldValues, eventOptions, fetch);
		expect(JSON.parse(fetch.mock.calls[0][1].body).entryValues).toEqual({
			firstName: 'Thor',
			fld1: 1
		});
	});

	it('calls fetch with the _cf_verify token in body', () => {
		let _cf_verify = 'jwt.jwt.jwt;';
		let _sessionPublicKey = 'a42';
		submitFormCf2(fieldValues, {
			...eventOptions,
			_cf_verify,
			_sessionPublicKey
		}, fetch);
		expect(JSON.parse(fetch.mock.calls[0][1].body)._cf_verify).toEqual(_cf_verify);
	});

	it('calls fetch with the _sessionPublicKey token in body', () => {
		let _cf_verify = 'jwt.jwt.jwt;';
		let _sessionPublicKey = 'a42';
		submitFormCf2(fieldValues, {
			...eventOptions,
			_cf_verify,
			_sessionPublicKey
		}, fetch);
		expect(JSON.parse(fetch.mock.calls[0][1].body)._sessionPublicKey).toEqual(_sessionPublicKey);
	});


	it('Extracts _cf_verify and _sessionPublicKey from fieldValues if needed', () => {
		let _cf_verify = 'jwt.jwt.jwt;';
		let _sessionPublicKey = 'a42';
		submitFormCf2(
			{...fieldValues,
				_cf_verify,
				_sessionPublicKey
			}, eventOptions,
			fetch

		);
		expect(JSON.parse(fetch.mock.calls[0][1].body)._sessionPublicKey).toEqual(_sessionPublicKey);
	});

	it('calls fetch with POST HTTP method', () => {
		submitFormCf2(fieldValues, eventOptions, fetch);
		expect(fetch.mock.calls[0][1].method).toEqual('POST');
	});

	it('calls fetch with headers', () => {
		submitFormCf2(fieldValues, eventOptions, fetch);
		expect(typeof fetch.mock.calls[0][1].headers).toEqual('object');
	});

	it('Adds json content type to fetch headers', () => {
		submitFormCf2(
			fieldValues,
			{
				apiRootUri,
				formId,
			},
			fetch
		);
		expect(fetch.mock.calls[0][1].headers['Content-Type']).toEqual('application/json');
	});
});


