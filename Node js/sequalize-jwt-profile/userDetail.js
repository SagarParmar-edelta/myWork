const Sequalize = require('sequelize');
const sequalize = require('./db');

const userDetail = sequalize.define('userdetail', {
    id: {
        type: Sequalize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    firstname: {
        type: Sequalize.STRING,
        allowNull: true,
    },
    lastname: {
        type: Sequalize.STRING,
        allowNull: true,
    },
    email: {
        type: Sequalize.STRING,
        allowNull: false,
        unique: true,
    },
    mobile_No: {
        type: Sequalize.STRING,
        allowNull: true,
        unique: true,
    },
    password: {
        type: Sequalize.STRING,
        allowNull: false,
    },
    gender: {
        type: Sequalize.STRING,
        allowNull: true,
    },
    age: {
        type: Sequalize.INTEGER,
        allowNull: true,
    },
    city: {
        type: Sequalize.STRING,
        allowNull: true,
    },
    pincode: {
        type: Sequalize.INTEGER,
        allowNull: true,
    },
});

module.exports = userDetail;
