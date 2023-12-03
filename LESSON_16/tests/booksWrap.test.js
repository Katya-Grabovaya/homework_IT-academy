const { sendHttpRequest } = require('../helpers/sendHTTPrequest');
const booksAPI = require('../testData/booksAPIschema.v1.json');
const booksAPIForGet = require('../testData/booksAPIschema.v2.json');

describe(`API weather tests`, function() {
    describe(`valid cases for "get by id"`, function () {
        let response;
        beforeAll(async () => {
            const config = {
                url: 'https://fakerestapi.azurewebsites.net/api/v1/Books/1',
                params: {id: '1'},
                headers: {
                    'api-supported-versions': '1.0',
                    'content-type': 'application/json', 
                    'date': 'Sun03 Dec 2023 11:23:49 GMT',
                    'server': 'Kestrel',
                    'transfer-encoding': 'chunked',
                    'x-adguard-filtered': 'AdGuard for Windows'
                }
            }
            response = await sendHttpRequest(config)
        });

        test(`should return status code 200`, async () => {
           await expect(response).toBeValidStatusCode(200);
        });

        test(`should be valid response body`, async () => {
            expect(response).toBeValidSchema(booksAPI);
        })
    });


    describe(`valid cases for "get"`, function () {
        let response;
        beforeAll(async () => {
            const config = {
                url: 'https://fakerestapi.azurewebsites.net/api/v1/Books',
                headers: {
                    'api-supported-versions': '1.0',
                    'content-type': 'application/json', 
                    'date': 'Sun03 Dec 2023 11:26:36 GMT',
                    'server': 'Kestrel',
                    'transfer-encoding': 'chunked',
                    'x-adguard-filtered': 'AdGuard for Windows'
                }
            }
            response = await sendHttpRequest(config)
        });

        test(`should return status code 200`, async () => {
           await expect(response).toBeValidStatusCode(200);
        });

        test(`should be valid response body`, async () => {
            expect(response).toBeValidSchema(booksAPIForGet);
        })
    })


    describe ('valid cases for "post"', function () {
        let response;
        beforeAll(async () => {
                const book = {
                "id": 101,
                "title": "Cosmos",
                "description": "sience",
                "pageCount": 500,
                "excerpt": "string",
                "publishDate": "2023-12-30T20:23:57.036Z"
              };
              const config = {
                method: 'POST',
                url: 'https://fakerestapi.azurewebsites.net/api/v1/Books',                
                data: book,
                headers: {
                    'access-control-allow-origin': '*', 
                    'api-supported-versions': '1.0',
                    'content-type': 'application/json', 
                    'date': 'Thu30 Nov 2023 20:24:03 GMT',
                    'server': 'Kestrel',
                    'transfer-encoding': 'chunked',
                    'x-adguard-filtered': 'AdGuard for Windows'
                }
            };

            response = await sendHttpRequest(config)
        });
        test(`should return status code 200`, async () => {
            await expect(response).toBeValidStatusCode(200);
         });
 
         test(`should be valid response body`, async () => {
             expect(response).toBeValidSchema(booksAPI);
         })

    });


    describe ('valid cases for "put"', function () {
        let response;
        beforeAll(async () => {
            const updatedBook = {
                "id": 2,
                "title": "Cosmos",
                "description": "sience",
                "pageCount": 499,
                "excerpt": "string",
            };
            const  config = {
               method: 'PUT',
                url: 'https://fakerestapi.azurewebsites.net/api/v1/Books/2',
                data: updatedBook,
                params: {id: '2'},
                headers: {
                    'access-control-allow-origin': '*', 
                    'api-supported-versions': '1.0',
                    'content-type': 'application/json', 
                    'date': 'Sun03 Dec 2023 11:06:25 GMT',
                    'server': 'Kestrel',
                    'transfer-encoding': 'chunked',
                    'x-adguard-filtered': 'AdGuard for Windows'
                }
            };
            response = await sendHttpRequest(config)
        });

        test(`should return status code 200`, async () => {
            await expect(response).toBeValidStatusCode(200);
         });
 
         test(`should be valid response body`, async () => {
             expect(response).toBeValidSchema(booksAPI);
         })
    })

    describe ('valid cases for "delete"', function () {
        let resonse;
        beforeAll(async () => {
            const config = {
                method: 'DELETE',
                url: 'https://fakerestapi.azurewebsites.net/api/v1/Books/2',
                params: {id: '2'},                
                headers: {
                    'access-control-allow-origin': '*', 
                    'api-supported-versions': '1.0',
                    'content-length': 0, 
                    'date': 'SSun03 Dec 2023 11:20:04 GMT',
                    'server': 'Kestrel',
                    'x-adguard-filtered': 'AdGuard for Windows'
                }
            }
            response = await sendHttpRequest(config)
        });
        test(`should return status code 200`, async () => {
            await expect(response).toBeValidStatusCode(200);
         });
    })
})
   
