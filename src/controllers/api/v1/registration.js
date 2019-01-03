const User              = require('../../../models/mongo');
const async             = require('async');
const mongoose         = require('mongoose')

exports.register = (req, res) => {
        async.series({
            checkUser: function(callback){
                let errors = {}
                if(!req.body.userdata.username) {
                    errors['username'] = 'username is required'
                }
                if(!req.body.userdata.Email) {
                    errors['email'] = 'email is required'
                }
                if(!req.body.userdata.Name) {
                    errors['name'] = 'name is required'
                }
                if(!_.isEmpty(errors)){
                    return Api.errorResponse(res, 200, errors)
                }

                User.findOne({email: req.body.userdata.Email}, (err, result) => {
                    if(result){
                        Api.successResponse(res, 200, 'User already registered', result)
                        return false;
                    }else{
                       return callback(null, result);
                    }
                    
                })
            },
            signup: function(callback) {
                const user = new User({
                    username: req.body.userdata.username,
                    email: req.body.userdata.Email,
                    name: req.body.userdata.Name
                })

                user.save()
                .then(data => {
                    Api.successResponse(res, 200, 'User registered successfully', data)
                })
                .catch(err => {
                    Api.errorResponse(res, 500, err)
                })
            }
        });
  
};


exports.ListUser = (req, res) =>{
    try{
        User.find().exec((error, result)=>{
            if(error){
                Api.errorResponse(res, 400, error)
            }
            if(result){
                Api.successResponse(res, 200, 'list of users', result);
            }
        })
    }catch(err){
        Api.errorResponse(res, 500, 'error in fetching data', error)
    }
}

exports.UserData = (req, res) =>{
    try {
        const id = req.body.id;
        User.findOne({_id: new mongoose.Types.ObjectId(id) })
        .exec((error, result)=>{
            if(error){
                Api.errorResponse(res, 500, 'error in fetching data', error)
            }
            if(result){
                Api.successResponse(res, 200, 'users detail fetched successfully', result )
            }
        })
    } catch (error) {
        Api.errorResponse(res, 500, 'error in fetching data', error)
    }
}

exports.UpdateUserData = (req, res) =>{
    try {
        const userData = req.body.data;
        const id = req.body.id;
        User.update({_id: new mongoose.Types.ObjectId(id) },
        {$set: {
            username: userData.username,
            email: userData.Email,
            name: userData.Name
        }})
        .exec((error, result)=>{
            if(error){
                Api.errorResponse(res, 500, 'error in updating data', error)
            }
            if(result){
                Api.successResponse(res, 200, 'users data updated successfully', result )
            }
        })
    } catch (error) {
        Api.errorResponse(res, 500, 'error in updating data', error)
    }
}

exports.DeleteUser = (req, res) =>{
    try {
        const id = req.body.id;
        User.remove({_id: new mongoose.Types.ObjectId(id) })
        .exec((error, result)=>{
            if(error){
                Api.errorResponse(res, 500, 'error in deleting data', error)
            }
            if(result){
                Api.successResponse(res, 200, 'user deleted successfully', result )
            }
        })
    } catch (error) {
        Api.errorResponse(res, 500, 'error in deleting data', error)
    }
}