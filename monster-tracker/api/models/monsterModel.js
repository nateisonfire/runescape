
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var monster = new Schema({
  name: String,
  drops: Array
});

module.exports = mongoose.model('monster', monster);