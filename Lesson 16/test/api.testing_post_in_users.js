const axios = require("axios");
const validator = require(`jsonschema`);
const fakeAPIUsersSchema = require(`../data/fakeAPIUsers.v1.json`);

describe(`Testing POST in Users API from fakerestapi`, function () {
    let response;
    beforeAll(async () => {
        response = await axios.post(`https://fakerestapi.azurewebsites.net/api/v1/Users`,
            {
                "id": 12,
                "userName": "User",
                "password": "Psw123"
            },
            {
                headers: {
                    accept: "*/*",
                    "Content-Type": "application/json; v=1.0"

                }
            });
        console.log(response);
    })

    test(`POST request should be 200`, async () => {
        await expect(response.status).toEqual(200);
    })

    test(`POST request should have valid schema`, async () => {
        const result = await validator.validate(response.data, fakeAPIUsersSchema);
        expect(result.valid).toEqual(true);
    })
})