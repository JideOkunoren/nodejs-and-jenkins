"use strict";

const express = require('express'),
    app = express(),
    port = 4000;

app.get('/', (req, res) => {
    res.send("This NodeJS app is running.....");
});



app.listen(port, () => {
    console.log(`App running on port ${port}`);
});