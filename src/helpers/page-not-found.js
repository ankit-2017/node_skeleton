module.exports = function(req, res, next){
    if(res.status(404).statusCode === 404){
        // res.render('page-not-found');
        res.send({ error: '404 Not Found' });
        return;
    }
    if(res.status(404).statusCode === 500){
        res.send({ error: '500 Internal Server Error' });
        return;
    }
};