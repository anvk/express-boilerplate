'use strict';

/* global module, require */

var clients = require('./clients.js');

var pingCallback = function(req, res, next) {
  res.status(200);
  res.json({ping: 'pong'});
};

var routes = [
  { method: 'get', url: '/ping', callback: pingCallback, noTokenRequired: true },
  { method: 'get', url: [
    '/clients',
    '/clients/:clientid'
  ], callback: clients.get },
  { method: 'post', url: '/clients', callback: clients.create },
  { method: 'put', url: '/clients/:clientid', callback: clients.update },
  { method: 'put', url: '/clientid/:clientid', callback: clients.delete }
];

module.exports = routes;
