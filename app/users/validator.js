"use strict";

const i18n = require('i18n');
const validator = require('validator');
const { RESPONSES } = require('../common/constants');

exports.isDataValid = (body) => {
  let errors = [];
  Object.keys(body).map(item => {
    if (body[item] === undefined || validator.isEmpty(body[item] + '')) {
      errors.push( item +" "+ RESPONSES.FIELD_IS_REQUIRED);
    }
  })
  return errors;
};

