const axios = require("axios");
const validator = require(`jsonschema`);
const fakeAPIUsersSchema = require(`../data/fakeAPIUsers.v1.json`);

describe(`Testing GET in Users API from fakerestapi`, function () {
    let response;
    beforeAll(async () => {
        response = await axios.get(`https://fakerestapi.azurewebsites.net/api/v1/Users`, {
            Headers: {
                accept: `text/plain`,
                "Content-Type": `application/json; v=1.0`
            }
        });
        console.log(response);
    })

    test(`GET request should be 200`, async () => {
        await expect(response.status).toEqual(200);
    })

    test(`GET request should have valid schema`, async () => {
        const result = await response.data.every(elem => validator.validate(elem, fakeAPIUsersSchema));
        expect(result).toEqual(true);
    })
})