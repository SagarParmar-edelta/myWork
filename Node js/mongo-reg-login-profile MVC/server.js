const express = require('express');
const myRouter = require('./routes/routes');
const { con } = require('./models/index.js');

const app = express();
app.use(express.json());

if (con) {
    console.log('Connected Successfully!');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log('server run on port:', PORT);
    });
}
app.use(myRouter);
