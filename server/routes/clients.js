'use strict';

/* global require, module */

var clients = {
  get: function(req, res, next) {
    var error = false;

    var data = [
      {
        _id: '1',
        name: 'Alex'
      },
      {
        _id: '2',
        name: 'Oleksiy'
      }
    ];

    if (error) {
      return next(error);
    }

    res.status(200);
    res.json(data);
  },

  create: function(req, res, next) {
    var error = false;

    var data = {
      _id: '100'
    };

    if (error) {
      return next(error);
    }

    res.status(200);
    res.json(data);
  },

  update: function(req, res, next) {
    var error = false;

    if (error) {
      return next(error);
    }

    res.status(200);
    res.json();
  },

  delete: function(req, res, next) {
    var error = false;

    if (error) {
      return next(error);
    }

    res.status(200);
    res.json();
  },
};

module.exports = clients;