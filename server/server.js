const path = require("path");
const express = require("express");
// const router = require('./routes/routes') -- bring in once routes being defined
const bodyParser = require("body-parser");

var server = express();

server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, "../public")));

// server.use('/api', router) -- to add once routes being defined

module.exports = server;
