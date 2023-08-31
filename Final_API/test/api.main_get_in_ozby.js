const axios = require("axios");

describe(`Verify GET API requests on OZ.BY`, function () {
    let response;
    let params = [
        {
            link: `https://oz.by/`,
            title: `OZ.by`
        },
        {
            link: `https://oz.by/books/`,
            title: `<title>Книги : купить в Беларуси в интернет магазине — OZ.by</title>`
        }
    ]
    
    params.forEach((parameter) => {
        beforeAll(async () => {
            response = await axios.get(parameter.link, {
                Headers: {
                    Accept: `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7`,
                    "Accept-Encoding": 'gzip, deflate, br',
                    "Accept-Language": 'ru-RU,ru;q=0.9',
                    "Cache-Control": 'no-cache'
                }
            });
            //console.log(response);
        })
    
        test(`GET request should be 200`, async () => {
            await expect(response.status).toEqual(200);
        })
    
        test(`Response should contain correct title`, async () => {
            const body = await response.data;
            const title = parameter.title;
            await expect(body.includes(title)).toEqual(true);
        })
    })
})