const axios = require('axios');
const Validator = require('jsonschema').Validator;
const validate = new Validator();
const booksAPI = require('../testData/booksAPIschema.v1.json');
const booksAPIForGet = require('../testData/booksAPIschema.v2.json');

describe ('API books tests', function () {
    const baseApiUrl = 'https://fakerestapi.azurewebsites.net/api/v1/Books';

    describe ('API books test for "get"', function () {
        let response;
        beforeAll(async () => {
            response = await axios.get(`${baseApiUrl}`,  {
                headers: {
                    'api-supported-versions': '1.0',
                    'content-type': 'application/json', 
                    'date': 'Sun03 Dec 2023 11:26:36 GMT',
                    'server': 'Kestrel',
                    'transfer-encoding': 'chunked',
                    'x-adguard-filtered': 'AdGuard for Windows'
                }
            });
        });
        test(`should return status code 200`, async () => {
            expect(response.status).toBe(200);
        });

        test(`should be valid response body`, async () => {
            const result = validate.validate(response.data, booksAPIForGet);
            expect(result.valid).toBe(true);
        });
});

  

    describe(`API books tests for "get by id 1"`, function () {
        let response;
        const bookId = 1;
        beforeAll(async () => {
            response = await axios.get(`${baseApiUrl}/${bookId}`,  {
                headers: {
                    'api-supported-versions': '1.0',
                    'content-type': 'application/json', 
                    'date': 'Sun03 Dec 2023 11:23:49 GMT',
                    'server': 'Kestrel',
                    'transfer-encoding': 'chunked',
                    'x-adguard-filtered': 'AdGuard for Windows'
                }
            })
        });
    
        test(`should return status code 200`, async () => {
            expect(response.status).toBe(200);
        });

        test(`should be valid response body`, async () => {
            const result = validate.validate(response.data, booksAPI);
            expect(result.valid).toBe(true);
        });
    });



    describe('API books tests for "post"', function () {
        let response;
        const book = {
            "id": 101,
            "title": "Cosmos",
            "description": "sience",
            "pageCount": 500,
            "excerpt": "string",
            "publishDate": "2023-12-30T20:23:57.036Z"
          };
        beforeAll(async() => {
            response = await axios.post(`${baseApiUrl}`, book, {
                headers: {
                    'access-control-allow-origin': '*', 
                    'api-supported-versions': '1.0',
                    'content-type': 'application/json', 
                    'date': 'Thu30 Nov 2023 20:24:03 GMT',
                    'server': 'Kestrel',
                    'transfer-encoding': 'chunked',
                    'x-adguard-filtered': 'AdGuard for Windows'
                }
            });
          })
        test('should return status code 200', async () => {
          expect(response.status).toBe(200);
        });
        test(`should be valid response body`, async () => {
            const result = validate.validate(response.data, booksAPI);
            expect(result.valid).toBe(true);
        });
      });



      describe ('API books tests for "put"', function () {
        let response;
        const bookId = 2;
        const updatedBook = {
            "id": bookId,
            "title": "Cosmos",
            "description": "sience",
            "pageCount": 500,
            "excerpt": "string"
        }
        beforeAll(async() => {
            response = await axios.put(`${baseApiUrl}/${bookId}`, updatedBook, {
                headers: {
                    'access-control-allow-origin': '*', 
                    'api-supported-versions': '1.0',
                    'content-type': 'application/json', 
                    'date': 'Sun03 Dec 2023 11:06:25 GMT',
                    'server': 'Kestrel',
                    'transfer-encoding': 'chunked',
                    'x-adguard-filtered': 'AdGuard for Windows'
                }
            });
        });

        test('schould return status code 200', async () => {
            expect(response.status).toBe(200);
        });

        test(`should be valid response body`, async () => {
            const result = validate.validate(response.data, booksAPI);
            expect(result.valid).toBe(true);
        });
      });



      describe('API books tests for "delete"', function () {
        let response;
        const bookId = 1;

        beforeAll(async() => {
            response = await axios.delete(`${baseApiUrl}/${bookId}`, {
                headers: {
                    'access-control-allow-origin': '*', 
                    'api-supported-versions': '1.0',
                    'content-length': 0, 
                    'date': 'SSun03 Dec 2023 11:20:04 GMT',
                    'server': 'Kestrel',
                    'x-adguard-filtered': 'AdGuard for Windows'
                }
            });
        });
        test('should return status code 200', async () => {
          expect(response.status).toBe(200);
        });
        test(`should be invalid response body`, async () => {
            const result = validate.validate(response.data, booksAPI);
            expect(result.valid).toBe(false);
        });
      });
})







    


