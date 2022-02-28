const sequalize = require('../models/db');

const conn = async () => {
    try {
        await sequalize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = conn;
