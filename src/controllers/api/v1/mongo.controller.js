const MongoTransfomer   = require('../transformers/mongo.transformer');
const User              = require('../../../models/mongo');
const jwt               = require('jsonwebtoken');

/**
 * Created by Vijay Pratap Singh on 18/10/2018.
 */

exports.home = (req, res) => {
    res.send('this is home page');
}

exports.register = (req, res) => {
    try {
        let errors = {}
        if(!req.body.email) {
            errors['name'] = 'Email is required'
        }
        if(!req.body.password) {
            errors['password'] = 'Password is required'
        }
        if(!_.isEmpty(errors)){
            return Api.errorResponse(res, 200, errors)
        }
        const user = new User({
            name: req.body.name, 
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        user.save()
        .then(data => {
            Api.successResponse(res, 200, 'User registered successfully', data)
        }).catch(err => {
            Api.errorResponse(res, 500, err)
        });
    } catch (err) {
        Api.errorResponse(res, 500, err)
    }
};

// exports.login = (req, res) => {
//     try {
//         let errors = {}
//         if(!req.body.email) {
//             errors['name'] = 'Email is required'
//         }
//         if(!req.body.password) {
//             errors['password'] = 'Password is required'
//         }
//         if(!_.isEmpty(errors)){
//             return Api.errorResponse(res, 200, errors)
//         }
//         User.findOne({'email': req.body.email, 'password': req.body.password})
//         .then((data) => {
//             if(!data) {
//                 return Api.errorResponse(res, 200, 'Invalid username or email')
//             }
//             var userinfo = Helpers.dataParse(data)
//             var token = jwt.sign({ id: userinfo._id }, ENV.JWT_SECRET, {expiresIn: ENV.JWT_EXPIRATION});
//             userinfo.token = token
//             Api.successResponse(res, 200, 'User login successfully', userinfo)
//         }).catch(err => {
//             Api.errorResponse(res, 500, err)
//         });
//     } catch (err) {
//         Api.errorResponse(res, 500, err)
//     }
// };

// exports.users = (req, res) => {
//     try {
//         User.find()
//         .then(data => {
//             var users = MongoTransfomer.transformCollection(data)
//             Api.successResponse(res, 200, 'User Listing', users)
//         }).catch(err => {
//             Api.errorResponse(res, 500, err)
//         });
//     } catch (err) {
//         Api.errorResponse(res, 500, err)
//     }    
// };

// exports.details = (req, res) => {
//     console.log('request decoded', req.decoded)
//     try {
//         User.findById(req.params.userId)
//         .then(user => {
//             if(!user) {
//                 return Api.errorResponse(res, 200, 'User not found')            
//             }
//             var userinfo = Helpers.dataParse(user)
//             var data = MongoTransfomer.transform(userinfo)
//             Api.successResponse(res, 200, 'Get info successfully', data)
//         }).catch(err => {
//             if(err.kind === 'ObjectId') {
//                 return Api.errorResponse(res, 404, 'User not found')                
//             }
//             return Api.errorResponse(res, 500, err)
//         });
//     }  catch (err) {
//         Api.errorResponse(res, 500, err)
//     }
// };

// exports.update = (req, res) => {
//     try {
//         if(!req.body.name) {
//             return Api.errorResponse(res, 200, 'Name is required')
//         }
    
//         User.findByIdAndUpdate(req.params.userId, {
//             name: req.body.name, 
//             username: req.body.username,
//             email: req.body.email,
//             password: req.body.password
//         }, {new: true})
//         .then(user => {
//             if(!user) {
//                 return Api.errorResponse(res, 200, 'User not found')
//             }
//             Api.successResponse(res, 200, 'User updated successfully', users)
//         }).catch(err => {
//             if(err.kind === 'ObjectId') {
//                return Api.errorResponse(res, 404, 'User not found')              
//             }
//             return Api.errorResponse(res, 500, err)
//         });
//     } catch (err) {
//         Api.errorResponse(res, 500, err)
//     }
// };

// exports.delete = (req, res) => {
//    try {
//         User.findByIdAndRemove(req.params.userId)
//         .then(user => {
//             if(!user) {
//                return Api.errorResponse(res, 200, 'User not found')
//             }
//             var user = {id: user.id, name: user.name}
//             Api.successResponse(res, 200, 'User deleted successfully', user)
//         }).catch(err => {
//             if(err.kind === 'ObjectId' || err.name === 'NotFound') {
//                 return Api.errorResponse(res, 404, 'User not found')               
//             }
//             return Api.errorResponse(res, 500, err)
//         });
//     } catch (err) {
//         Api.errorResponse(res, 500, err)
//     }
// };