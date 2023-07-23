const axios = require("axios");
const validator = require(`jsonschema`);
const fakeAPIUsersSchema = require(`../data/fakeAPIUsers.v1.json`);

describe(`Testing PUT in Users API from fakerestapi`, function () {
    test(`PUT request should be 200`, async () => {
        response = await axios.put(`https://fakerestapi.azurewebsites.net/api/v1/Users/` + 1,
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
        await expect(response.status).toEqual(200);
    })

    test(`PUT request should have valid schema`, async () => {
        response = await axios.put(`https://fakerestapi.azurewebsites.net/api/v1/Users/` + 1,
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
        const result = await validator.validate(response.data, fakeAPIUsersSchema);
        expect(result.valid).toEqual(true);
    })

    test(`PUT with ID of non-existing user should be 404`, async () => {
        try {
            const response = await axios.put("https://fakerestapi.azurewebsites.net/api/v1/Users/" + 100,
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
        }
        catch (err) {
            await expect(err.response.status).toEqual(404);
        }
    })

    test(`PUT without ID should be 405`, async () => {
        try {
            const response = await axios.put("https://fakerestapi.azurewebsites.net/api/v1/Users/",
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
        }
        catch (err) {
            await expect(err.response.status).toEqual(405);
        }
    })
})