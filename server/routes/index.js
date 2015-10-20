'use strict';

/* global module, require */

var express = require('express'),
    router = express.Router(),
    config = require('../../config/config.json'),
    clients = require('./clients.js');

var ping = function(req, res) {
  res.json({
    message: 'pong'
  });
};

router.get(config.pingUrl, ping);

//Clients///////////////////////////////////
router.get([
  '/clients',
  '/clients/:clientid'
], clients.get);
router.post('/clients', clients.create);
router.put('/clients/:clientid', clients.update);
router.delete('/clientid/:clientid', clients.delete);
////////////////////////////////////////////

module.exports = router;
