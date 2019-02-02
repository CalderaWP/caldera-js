const roy = require('../routers/roy');
const express = require('express');
const moxios = require('moxios');
const request = require('supertest');

const initHugo = () => {
  const app = express();
  app.use(roy());
  return app;
}

describe('GET /', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
	const response = {
		blog: 'https://calderaforms.com',
		location: 'Pittsburgh',
		bio: 'Developer, JavaScript and PHP!'
	};
  test('It should fetch from GitHub', async () => {

    moxios.stubRequest(/api.github.com\/users/, {
      status: 200,
      response: JSON.stringify(response)
    });
    const app = initHugo();
    const res = await request(app).get('/');
    expect(response).toEqual(JSON.parse(res.text));
  });
  test('It should return 200 ', async () => {
    moxios.stubRequest(/api.github.com\/users/, {
      status: 200,
      response
    });
    const app = initHugo();
    const res = await request(app).get('/');
    expect(res.status).toEqual(200);
  });
});
