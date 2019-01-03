let ENV = {} //Make this global to use all over the application

ENV.APP_NAME='node_backend_skeleton';
ENV.APP_ENV='development';
ENV.APP_PORT=5000;
ENV.APP_DEBUG=true;
ENV.APP_URL='http://localhost';
ENV.SITE_URL='http://localhost:5000';
ENV.API_BASE_URL='/api/v1/'
ENV.EMAIL_TEMPLATE_PATH='views/email_templates'
ENV.FILE_UPLOAD_BASE_PATH='public/file_uploads'

ENV.DB_MIGRATIONS='../database/migrations'
ENV.DB_TABLENAME='migrations'
ENV.DB_SEEDS='../database/seeds'

ENV.DB_CONNECTION='mongodb'; // mongodb or mysql
ENV.DB_HOTS='localhost';
ENV.DB_PORT='27017'; // mysql port 3306, mongo port 27017
ENV.DB_DATABASE='crud';
ENV.DB_USERNAME='root';
ENV.DB_PASSWORD='hestabit';
ENV.DB_POOL_MIN=2;
ENV.DB_POOL_MAX=10;

ENV.MONGO_URI=`${ENV.DB_CONNECTION}://${ENV.DB_HOTS}:${ENV.DB_PORT}/${ENV.DB_DATABASE}`;

ENV.JWT_SECRET='supersecret';
ENV.JWT_EXPIRATION=86400;

ENV.MAIL_DRIVER=
ENV.MAIL_HOST='email-smtp.us-west-2.amazonaws.com'  
ENV.MAIL_PORT=2587
ENV.MAIL_SECURE=false
ENV.MAIL_USERNAME='AKIAJFI4HK3EA5QHR6CA'
ENV.MAIL_PASSWORD='AiZfTAr6iG1e4iWuvrom46PJm5vMITIWSCFmUcWS1RPo'
ENV.MAIL_ENCRYPTION=
ENV.MAIL_FROM_ID='"Hestabit 👻" <friends@hestabit.com>'

ENV.PUSHER_APP_ID=
ENV.PUSHER_APP_KEY=
ENV.PUSHER_APP_SECRET=
ENV.PUSHER_APP_CLUSTER=
ENV.PUSHER_APP_ENCRYPTED=

ENV.S3_KEY=
ENV.S3_SECRET=
ENV.S3_REGION=
ENV.S3_BUCKET=

module.exports = ENV;