require('dotenv').config();
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
app.use(express.json());

const PORT = 5000;
app.listen(PORT, () => console.log('server is running on:', PORT));

const users = [
    {
        name: 'sagar',
        des: 'Software Developer',
    },
    {
        name: 'xyz',
        des: 'QA Enginner',
    },
];

app.get('/users', authenticateToken, (req, res) => {
    res.send(users.filter((user) => user.name === req.user.name));
});

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        console.log(user);
        req.user = user;
        next();
    });
}

app.post('/login', (req, res) => {
    const { username } = req.body;
    const user = { name: username };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({ accessToken: accessToken });
});
