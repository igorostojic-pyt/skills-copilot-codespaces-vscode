// Create web server
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const comments = require("./comments.json");

// Get all