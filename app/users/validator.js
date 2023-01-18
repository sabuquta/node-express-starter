"use strict";

const i18n = require('i18n');
const validator = require('validator');
const {RESPONSES} = require('../common/constants');
const _ = require("lodash");
exports.isDataValid = async (body) => {
    let errors = [];
    Object.keys(body).map(key => {
        if (_.isEmpty(body[key].item +"") && body[key].required) {
                errors.push(key + " " + RESPONSES.FIELD_IS_REQUIRED);
        } else if (body[key].date &&  body[key].item.length !== 13) {
            errors.push(key + " " + RESPONSES.INVALID_DATE_FORMAT);
        }
    })
    return errors;
};

