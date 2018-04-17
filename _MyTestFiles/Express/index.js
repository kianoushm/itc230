'use strict'
const express = require("express");
const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static('./public')); // set location for static files
app.use(require("body-parser").urlencoded({extended: true})); // parse form submissions