'use strict';

/* global module */

var express = require('express'),
    router = express.Router(),
    auth = require('./authorizeUrls.js'),
    routes = require('../routes/routes.js');

routes.forEach(function(route) {
  router[route.method](route.url, auth(route));
});

module.exports = router;
