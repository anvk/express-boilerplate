'use strict';

/* global module */

var tokenConfig = require('../../config/config.json').token,
    routes = require('../routes/routes.js').routes,
    jwt = require('jwt-simple');

module.exports = function(route) {
  route = route || {};

  return function(req, res, next) {

    if (route.noTokenRequired) {
      return route.callback(req, res, next);
    }

    var token = req.params.jwt || req.headers['x-access-token'];

    if (!token) {
      res.status(401);
      return res.json({
        message: 'Token Required'
      });
    }

    // massage token here
    try {
      var payload = jwt.decode(token, tokenConfig.secret) || {};
    } catch(e) {
      res.status(401);
      return res.json({
        message: 'Token Expired'
      });
    }

    if (payload.expiry <= Date.now()) {
      res.status(400);
      return res.json({
        message: 'Token Expired'
      });
    }

    req.payload = {
      // some into REQ some of the payload
    };

    route.callback(req, res, next);
  };
};
