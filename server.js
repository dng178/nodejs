const express = require('express');
const app = express();
const setRoute = require("./route")

app.listen('3000', () => {
    console.log("Server start on port 3000")

    setRoute(app)
})



