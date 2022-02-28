const express = require('express');
const app = express();

app.use(listenMiddleware);
app.use(authenticat);

app.get('/users', xyz, (req, res) => {
    console.log('value of a in authentication: ' + req.a);
    res.send('admin page');
});

function xyz(req, res, next) {
    console.log('authentication done!');
    next();
}

function listenMiddleware(req, res, next) {
    console.log(req.originalUrl);
    next();
}

function authenticat(req, res, next) {
    if (req.query.admin) {
        req.a = 10; // we can access this variable in next execution of middleware
        // or function
        next();
    } else {
        console.log('authentication failed!');
    }
}

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});
