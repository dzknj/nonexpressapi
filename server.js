const Hapi = require('hapi');
const Animal = require(__dirname + '/models/animals'); // eslint-disable-line
const animalRoutes = require(__dirname + '/routes/animalroutes'); // eslint-disable-line
const serverError = require(__dirname + '/lib/servererror'); // eslint-disable-line
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/db');

const server = new Hapi.Server();
server.connection({ port: 7777 });

server.route(require(__dirname + '/routes/animalroutes'));

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server up and running at: ', server.info.uri);
});
