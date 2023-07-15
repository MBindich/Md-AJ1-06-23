const axios = require("axios");
const validator = require(`jsonschema`);
const fakeAPIUsersSchema = require(`../data/fakeAPIUsers.v1.json`);

describe(`Testing GET by ID in Users API from fakerestapi`, function () {
    test(`GET request with correct ID should be 200`, async () => {
        const response = await axios.get("https://fakerestapi.azurewebsites.net/api/v1/Users/" + 1, {
            Headers: {
                accept: `text/plain`,
                "Content-Type": `application/json; v=1.0`
            }
        });
        await expect(response.status).toEqual(200);
    })

    test(`GET request should have valid schema`, async () => {
        const response = await axios.get("https://fakerestapi.azurewebsites.net/api/v1/Users/" + 1, {
            Headers: {
                accept: `text/plain`,
                "Content-Type": `application/json; v=1.0`
            }
        });
        const result = await validator.validate(response.data, fakeAPIUsersSchema);
        await expect(result.valid).toEqual(true);
    })

    test(`GET request with ID of non-existing user should be 404`, async () => {
        try {
            const response = await axios.get("https://fakerestapi.azurewebsites.net/api/v1/Users/" + 100, {
                Headers: {
                    accept: `text/plain`,
                    "Content-Type": `application/json; v=1.0`
                }
            });
        }
        catch (err) {
            await expect(err.response.status).toEqual(404);
        }
    })
})