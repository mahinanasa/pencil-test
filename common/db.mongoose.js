/* eslint-disable linebreak-style */

const mongoose = require('mongoose');
const { mongoDbUrl } = require('./keys');

// connect to mongodb

const connect = () => {
  if (process.env.NODE_ENV === 'dev');
  // mongoose.set('debug', true);
  mongoose
    .connect(mongoDbUrl, {
      keepAlive: true ,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Successfully established connection to database');
    })
    .catch((err) => {
        console.log('Unable to connect to database', err);
    });
};
module.exports = {
  connect,
};
