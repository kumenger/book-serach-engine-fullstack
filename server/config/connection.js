const { connect, connection } = require('mongoose');
require('dotenv').config()
connect(process.env.MONGODB_URI);

module.exports = connection;
