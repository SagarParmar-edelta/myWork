require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const sequalize = require('./db');
const User1 = require('./user1');
const bcrypt = require('bcrypt');
const regValidation = require('./regValidation');
const loginValidation = require('./loginValidation');
const jwt = require('jsonwebtoken');

const checkConnection = async (req, res, next) => {
    try {
        await sequalize.authenticate();
        console.log('connection is establish Succesfully!');
        next();
    } catch (err) {
        console.log('Unable to connect Database: \n' + err.message);
    }
};

app.post('/reg', checkConnection, async (req, res) => {
    try {
        await regValidation.validateAsync(req.body);
        const { name, email } = req.body;
        const newPassword = await bcrypt.hash(req.body.password, 10);
        // await sequalize.sync();
        const [user, created] = await User1.findOrCreate({
            where: { email: email },
            defaults: { name, email, password: newPassword },
        });

        if (created) {
            res.send('Data inserted!');
        } else {
            res.send('User is already exists');
        }
    } catch (err) {
        res.send(err.message);
    }
});

app.post('/login', checkConnection, async (req, res) => {
    try {
        await loginValidation.validateAsync(req.body);
        // await sequalize.sync();
        const { email, password } = req.body;
        const getPass = await User1.findOne({
            attributes: ['password'],
            where: { email: email },
        });
        if (getPass) {
            const match = await bcrypt.compare(password, getPass.password);
            if (match) {
                const accessToken = jwt.sign(
                    email,
                    process.env.ACCESS_TOKEN_SECRET
                );
                res.send({ accessToken: accessToken });
            } else {
                res.send('Username or password Incorrect!');
            }
        } else {
            res.send('User is not exists');
        }
    } catch (err) {
        res.send(err.message);
    }
});

app.get('/profile', authenticateToken, checkConnection, async (req, res) => {
    try {
        const userData = await User1.findOne({ where: { email: req.email } });
        res.send({ name: userData.name, email: userData.email });
    } catch (err) {
        console.log(err.message);
    }
});

async function authenticateToken(req, res, next) {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) return res.sendStatus(401);
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decode) => {
            if (error) return res.sendStatus(401);
            req.email = decode;
            next();
        });
    } catch (err) {
        console.log(err);
    }
}

const PORT = 5000;
app.listen(PORT, () => {
    console.log('server run on port:', PORT);
});
