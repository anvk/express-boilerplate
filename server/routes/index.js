'use strict';

/* global module, require */

var express = require('express'),
    router = express.Router(),
    config = require('../../config/config.json'),
    clients = require('./clients.js'),
    authMiddleware = require('../middlewares/authRequest.js');

var ping = function(req, res) {
  res.json({
    message: 'pong'
  });
};

// this request does not get authMiddleware so it does not require tokens
router.get(config.pingUrl, ping);

//Clients///////////////////////////////////
router.get([
  '/clients',
  '/clients/:clientid'
], clients.get);
router.post('/clients', authMiddleware, clients.create);
router.put('/clients/:clientid', authMiddleware, clients.update);
router.delete('/clientid/:clientid', authMiddleware, clients.delete);
////////////////////////////////////////////

module.exports = router;
