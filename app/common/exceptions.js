const i18n = require('i18n');
const { RESPONSES } = require('../common/constants');
const ApplicationException = require('./app_error');

class InvalidInputException extends ApplicationException {
    constructor(message) {
        super(message || RESPONSES.INVALID_INPUT)
    }
}

class InvalidMobileNumberException extends ApplicationException {
    constructor(message) {
        super(message || RESPONSES.INVALID_MOBILE)
    }
}

class InvalidEmailOrPasswordException extends ApplicationException {
    constructor(message) {
        super(message || 'Invalid email or password', 401);
    }
}

class UserNotFoundException extends ApplicationException {
    constructor(message) {
        super(message || i18n.__(RESPONSES.USER_NOT_FOUND), 404);
    }
}

class NotFoundException extends ApplicationException {
    constructor(message, item = '') {
        super(message || i18n.__(RESPONSES.ITEM_NOT_FOUND, item), 404);
    }
}

class EmailAlreadyExists extends ApplicationException {
    constructor(message, item = '') {
        super(message || RESPONSES.EMAIL_IS_EXISTS, 401);
    }
}
class MobileIsExists extends ApplicationException {
    constructor(message, item = '') {
        super(message || RESPONSES.MOBILE_IS_EXISTS, 401);
    }
}
class InvalidUserToken extends ApplicationException {
    constructor(message, item = '') {
        super(message || RESPONSES.INVALID_USER_TOKEN, 401);
    }
}

module.exports = {
    InvalidInputException: InvalidInputException,
    InvalidMobileNumberException: InvalidMobileNumberException,
    InvalidEmailOrPasswordException: InvalidEmailOrPasswordException,
    UserNotFoundException: UserNotFoundException,
    NotFoundException: NotFoundException,
    EmailAlreadyExists : EmailAlreadyExists,
    MobileIsExists : MobileIsExists,
    InvalidUserToken : InvalidUserToken

};
