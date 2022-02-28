const Sequalize = require('sequelize');
const sequalize = require('./db');

const user1 = sequalize.define('user1', {
    uid: {
        type: Sequalize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequalize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequalize.STRING,
        allowNull: false,
        // unique: true,
    },
    password: {
        type: Sequalize.STRING,
        allowNull: false,
    },
});

module.exports = user1;
