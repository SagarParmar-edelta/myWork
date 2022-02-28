const express = require('express');
const myRouter = require('./routes/routes');
const checkConnection = require('./services/checkConnection.js');
const app = express();
app.use(express.json());

checkConnection();
app.use(myRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('server run on port:', PORT);
});
