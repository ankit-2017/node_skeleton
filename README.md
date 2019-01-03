Purpose
    Reuse authentication code of REST APIs

Features

    JWT : Authentication verify user.

    Nodemailer : Send verification emails.
    
    Express: Routing.
    
    EJS : Template engine


Database connection
        MongoDB [Mongoose]

  
Step to run locally
    
    Install
        npm install [required]

    Start MongoDB
        service mongod start

    Run
        npm run server [required]


API Docs

    https://docs.google.com/document/d/1SbcZiu6AJjd2xEP_EFEgKbn7sNsvakOWPzoYZiSB9io/edit


References

    https://stackoverflow.com/questions/42872007/nodejs-data-transformers-like-in-laravel-php-framework [Transformers]

    https://www.codediesel.com/javascript/nodejs-mysql-orms/ [NodeJS MySQL ORMs]

    message in terminal : Executing (default): SELECT 1+1 AS result []
    https://stackoverflow.com/questions/28927836/prevent-sequelize-from-outputting-sql-to-the-console-on-execution-of-query [sequelizer connection]

    https://stackoverflow.com/questions/14653913/rename-node-js-sequelize-timestamp-columns [rename -> createdAt and updatedAt filed]


    https://github.com/sequelize/sequelize/issues/6224 [Schema]

    https://stackoverflow.com/questions/33138603/expressjs-sequelize-unrecognized-data-type  [Schema]


    https://sequelize.readthedocs.io/en/2.0/docs/migrations/ [migration]

    https://stackoverflow.com/questions/27835801/how-to-auto-generate-migrations-with-sequelize-cli-from-sequelize-models  [migration]

    http://www.duringthedrive.com/2017/05/06/models-migrations-sequelize-node/

    http://gregtrowbridge.com/getting-started-with-sequelize-and-the-sequelize-cli/

    1. sequelize model:create --name admin --attributes

    2. sequelize model:create --name Page --attributes "name:string, text:text, url:string"