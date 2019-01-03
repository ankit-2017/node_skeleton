const mongoose = require('mongoose');
require('../../helpers/global-variable');

mongoose.Promise = global.Promise;
mongoose.connect(ENV.MONGO_URI, { useNewUrlParser: true })
.then(() => {
    if(ENV.APP_ENV === 'development') console.log("Successfully connected to the mongodb");    
}).catch(err => {
    if(ENV.APP_ENV === 'development') console.log('Unable to connect mongodb');
    process.exit();
});