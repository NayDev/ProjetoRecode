const mongoose = require('mongoose');

const connection = () => {
  mongoose
    .connect('mongodb://localhost/fseletro', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MongoDB connected');
    })
    .catch((error) => {
      console.log(error);
    });
};
module.exports = connection();