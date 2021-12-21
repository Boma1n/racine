const config = require('./config');

const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${config.database.username}:${config.database.password}@${config.database.clusterName}.46ws8.mongodb.net/${config.database.databaseName}`,
  {
    connectTimeoutMS: 15000, socketTimeoutMS: 20000, useNewUrlParser: true, useUnifiedTopology: true
  }
);

mongoose.connection.once('open', () => {
  console.log('connexion OK');
});