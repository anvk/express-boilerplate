'use strict';

/*global module, require*/

var jwt = require('jwt-simple'),
    tokenConfig = require('../../config/config.json').token;

module.exports = function(req, res, next) {

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
    // some payload here inside of request
    // customerid: payload.customerid
  };

  next();
};
