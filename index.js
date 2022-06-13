"use strict"
require("dotenv").config();
let PORT = process.env.PORT || 3030;
const server = require("./src/server");
const { db } = require("./src/Models/index");
db.sync()
    .then(() => {
        server.start(PORT);
    })
    .catch(console.error);