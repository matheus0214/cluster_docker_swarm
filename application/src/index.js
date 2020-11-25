const express = require("express");
const os = require("os");

const app = express();

app.get("/", (request, response) => {
    return response.json({
        message: "Hello babys!😘🐱‍👤",
        host: os.hostname(),
        ip: request.connection.remoteAddress
    });
});

app.listen(3000, "0.0.0.0");