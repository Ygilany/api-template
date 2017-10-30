Service Template
===========================

## Dependencies
 - Node.js
 - Postgres/MySQL/SQL Server

## Installation
###1. Clone repository  

````
git@github.com:Ygilany/api-template.git
````

###2. Copy config.example.json to config.json and update settings
###3. Install Node dependencies

````
npm install
````

###4. compile the code first 
if you're using Node.js Version 6 or above skip this step
Development Model
```
npm run babel-dev
```
Production Mode

```
npm run babel
```

###4. Start application ([PM2](https://github.com/Unitech/pm2) recommended for running in background)

Development mode (recommended)
````
npm run dev
````

Production mode  
````
npm run prod
````

Production mode stop
````
npm run stop
````

## Tests

Tests can be run using:

Development Mode (continuously running)
````
npm run test-dev
````

One Time Run
```
npm test
```

##Documentation

To generate the Documentation files using the apidoc API
```
npm run docs
```