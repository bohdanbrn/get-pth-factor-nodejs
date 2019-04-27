const express = require("express");
const { pthFactor } = require("./pth-factor.js");

const app = express();

app.use(express.json());

app.get("/pth-factor", (req, res) => {
    try {
        let n = Number(req.query.n);
        let p = Number(req.query.p);
        let pth = pthFactor(n, p);

        res.send({ pth });
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = app;
