const express = require('express');
const app = express();
const setRoute = require("./route")
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen('3000', () => {
    console.log("Server start on port 3000")

    setRoute(app)
})


