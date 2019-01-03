exports.home = function(req, res){
        res.render('home');
};

exports.login = function(req, res){
        res.render('login');
};

exports.register = function(req, res){
        res.render('register');
};

exports.notFound = function(req, res){
        res.render('page-not-found');
};

