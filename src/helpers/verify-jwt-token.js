const jwt = require('jsonwebtoken');

exports.verifyJwtToken = (req, res, next) => {
    var token = req.headers.authorization;
    if (!token){
        return res.status(401).send({ 
            error: false, 
            status: 401, 
            message: 'No token provided.' 
        });
    } 
    
    jwt.verify(token, ENV.JWT_SECRET, (err, decoded) => {
        if (err){
            return res.status(200).send({ 
                error: false, 
                status: 200, 
                message: 'Failed to authenticate token.' 
            });
        } 
        req.decoded = decoded;
        next();
        // res.status(200).send(decoded);
    });
}