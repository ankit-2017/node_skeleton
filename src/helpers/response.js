exports.errorResponse = (res, status, msg = {}) => {
    console.log('error', msg)
    res.status(status).send({
        error: true,
        status: status,
        data: {},
        message: msg.message || msg
    });
}

exports.successResponse = (res, status, message, data = {}) => {
    res.status(status).send({
        error: false,
        data: data,
        status: status,
        message: message
    });
}