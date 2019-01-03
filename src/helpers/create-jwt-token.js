const jwt = require('jsonwebtoken');

exports.createJwtToken = (user_id) => {
    var token = jwt.sign({ id: user_id }, ENV.JWT_SECRET, {expiresIn: ENV.JWT_EXPIRATION});
    return token
}