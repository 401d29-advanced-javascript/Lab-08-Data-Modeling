'use strict';

const mongoose = require('mongoose');//forces use of the schema shape

const categories = mongoose.Schema({
  _id,
  name: {type: String, required: true, uppercase: true},
  display_name: {type: String, required: true, uppercase: true},//enum is labels only for that particular property
  description: {type: String, required: false, uppercase: true, enum: ['yes', 'no']},
});

module.exports = (mongoose.model('categories', categories));