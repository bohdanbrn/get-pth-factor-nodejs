const request = require("supertest");
const app = require("../src/app.js");

describe("GET /pth-factor", () => {
    test("Should return 0", async () => {
        const response = await request(app)
            .get("/pth-factor?n=4&p=4")
            .expect(200);

        expect(response.body.pth).toEqual(0);
    });

    test("Should return 2", async () => {
        const response = await request(app)
            .get("/pth-factor?n=1234&p=2")
            .expect(200);

        expect(response.body.pth).toEqual(2);
    });

    test("Should return 1", async () => {
        const response = await request(app)
            .get("/pth-factor?n=111111&p=1")
            .expect(200);

        expect(response.body.pth).toEqual(1);
    });

    test("Should return 2048", async () => {
        const response = await request(app)
            .get("/pth-factor?n=1048576&p=12")
            .expect(200);

        expect(response.body.pth).toEqual(2048);
    });

    test("Should return 67280421310721", async () => {
        const response = await request(app)
            .get("/pth-factor?n=67280421310721&p=2")
            .expect(200);

        expect(response.body.pth).toEqual(67280421310721);
    });

    test("Should return 7625597484987", async () => {
        const response = await request(app)
            .get("/pth-factor?n=22876792454961&p=28")
            .expect(200);

        expect(response.body.pth).toEqual(7625597484987);
    });

    test("Should return 0", async () => {
        const response = await request(app)
            .get("/pth-factor?n=866421317361600&p=26881")
            .expect(200);

        expect(response.body.pth).toEqual(0);
    }, 10000);

    test("Should return 866421317361600", async () => {
        const response = await request(app)
            .get("/pth-factor?n=866421317361600&p=26880")
            .expect(200);

        expect(response.body.pth).toEqual(866421317361600);
    }, 10000);

    test("Should return 160000000000", async () => {
        const response = await request(app)
            .get("/pth-factor?n=100000000000000&p=200")
            .expect(200);

        expect(response.body.pth).toEqual(160000000000);
    });

    test("Should return 438508772", async () => {
        const response = await request(app)
            .get("/pth-factor?n=99980000016&p=56")
            .expect(200);

        expect(response.body.pth).toEqual(438508772);
    });
});
