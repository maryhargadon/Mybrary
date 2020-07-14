require('rootpath')();

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');

// const mongoose = require('mongoose');
// const config = require('config');
// const db = config.get('mongoURI');

// mongoose
//   .connect(db, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB Connected...'))
//   .catch(err => console.log(err));


  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors());
  
  // use JWT auth to secure the api
  app.use(jwt());
  
  // api routes
  app.use('/users', require('./users/users.controller'));
  
  // global error handler
  app.use(errorHandler);
  
  // start server
  const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 5000;
  const server = app.listen(port, function () {
      console.log('Server listening on port ' + port);
  });  