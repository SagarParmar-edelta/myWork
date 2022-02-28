const Sequalize = require('sequelize');

const sequalize = new Sequalize('edelta', 'postgres', 'admin@123', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequalize;
