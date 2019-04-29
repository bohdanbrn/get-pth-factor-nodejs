const express = require("express");
const { pthFactor } = require("./pth-factor.js");

const app = express();

app.use(express.json());

app.get("/pth-factor", (req, res) => {
    try {
        let n = req.query.n;
        let p = req.query.p;
        let pth = pthFactor(n, p);

        if (pth.error) {
            return res.status(400).send({ error: pth.error });
        }

        res.send({ pth });
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = app;
