const axios = require("axios");
const validator = require(`jsonschema`);
const fakeAPIUsersSchema = require(`../data/fakeAPIUsers.v1.json`);

describe(`Testing DELETE in Users API from fakerestapi`, function () {
    test(`DELETE request should be 200`, async () => {
        response = await axios.delete(`https://fakerestapi.azurewebsites.net/api/v1/Users/` + 1,
            {
                headers: {
                    accept: "*/*",
                    "Content-Type": "application/json; v=1.0"

                }
            });
        console.log(response);
        await expect(response.status).toEqual(200);
    })

    test(`DELETE with ID of non-existing user should be 404`, async () => {
        try {
            const response = await axios.put("https://fakerestapi.azurewebsites.net/api/v1/Users/" + 100,
                {
                    headers: {
                        accept: "*/*",
                        "Content-Type": "application/json; v=1.0"
                    }
                });
        }
        catch (err) {
            await expect(err.response.status).toEqual(404);
        }
    })

    test(`PUT without ID should be 405`, async () => {
        try {
            const response = await axios.put("https://fakerestapi.azurewebsites.net/api/v1/Users/",
                {
                    headers: {
                        accept: "*/*",
                        "Content-Type": "application/json; v=1.0"
                    }
                });
        }
        catch (err) {
            await expect(err.response.status).toEqual(405);
        }
    })
})