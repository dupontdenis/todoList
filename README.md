# Express.js/MongoDB Azure sample app

Sample application to demonstrate how to deploy an Node.js (Express.js) app using MongoDB to Azure.  

This repository is the sample code for the article [https://docs.microsoft.com/en-us/azure/app-service/tutorial-nodejs-mongodb-app](https://docs.microsoft.com/en-us/azure/app-service/tutorial-nodejs-mongodb-app).  The article covers how to create the appropriate resources and deploy your applciation to Azure.

## how to

start create a file .env
```env
    ENVIRONMENT=development
    DATABASE_NAME=Dupont
    DATABASE_URL=mongodb://127.0.0.1:27017/
    KEY_VAULT_SECRET_NAME_DATABASE_URL=DATABASE-URL 
    PORT=8080
```

### install module

npm i

npm install --save-dev nodemon cross-env

npm run start:dev

or: npx nodemon ./bin/www