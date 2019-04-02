import submitFormCaldera from './submitFormCaldera';
import submitFormCf2 from './submitFormCf2';
import getCf2Token from './getCf2Token';
import handleFormSubmitCf2 from './handleFormSubmitCf2';

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
		fetch.mockResponseOnce(JSON.stringify({data: '12345'}));
		APIRequest('google').then(res => {
			expect(JSON.parse(res.body).data).toEqual('12345');
		});

		//assert on the times called and arguments given to fetch
		expect(fetch.mock.calls.length).toEqual(1);
		expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
	});
});


describe('get form token', () => {
	beforeEach(() => {
		fetch.resetMocks();
	});
	const formId = 'cf1';
	it('gets tokens', () => {
		getCf2Token('https://ap.com', formId, fetch)
			.then(r => {
				expect(typeof r._cf_verify).toBe('string');
				expect(typeof r._sessionPublicKey).toBe('string')
			})

	});
})

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
		const r = submitFormCaldera(fieldValues, eventOptions, fetch);
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


describe('handleFormSubmitCf2', () => {
	const entryValues = {
		fld1: 1,
		firstName: 'Thor'
	};
	const tokens = {
		_sessionPublicKey: '1',
		_cf_verify: '111'
	};

	let axios = {
		request: jest.fn((config) => Promise.resolve({data: {}}))
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

	it('calls axios with the right url', async (done) => {
		handleFormSubmitCf2({
			apiRootUri,
			formId,
			entryValues,
			tokens,
			axios
		}).then(r => {
			expect(axios.request.mock.calls[0][0].url).toEqual(
				`http://localhost:8228/wp-json/cf-api/v3/process/submission/${formId}`
			);
			done();
		});

	});

	it('calls axios with the field values in body', async (done) => {
		handleFormSubmitCf2({
			apiRootUri,
			formId,
			entryValues,
			tokens,
			axios
		}).then(r => {
			expect(axios.request.mock.calls[0][0].data).toEqual(
				{
					"_cf_verify": "111",
					"_sessionPublicKey": "1",
					"entryValues": {"firstName": "Thor", "fld1": 1},
					"formId": "cf1"
				}
			);
			done();
		});
	});

	it('Uses POST method', async (done) => {
		handleFormSubmitCf2({
			apiRootUri,
			formId,
			entryValues,
			tokens,
			axios
		}).then(r => {
			expect(axios.request.mock.calls[0][0].method).toEqual('POST');
			done();
		});
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
			{
				...fieldValues,
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


