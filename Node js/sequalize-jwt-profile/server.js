require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const sequalize = require('./db');
const bcrypt = require('bcrypt');
const regValidation = require('./regValidation');
const loginValidation = require('./loginValidation');
const jwt = require('jsonwebtoken');
const UserDetail = require('./userDetail');
const { query } = require('express');

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
        const { firstname, lastname, email } = req.body;
        const newPassword = await bcrypt.hash(req.body.password, 10);
        const [user, created] = await UserDetail.findOrCreate({
            where: { email: email },
            defaults: { firstname, lastname, email, password: newPassword },
        });

        if (created) {
            res.send('User Registered Successfully!');
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
        const { email, password } = req.body;
        const getPass = await UserDetail.findOne({
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
app.get('/userdetails', checkConnection, async (req, res) => {
    try {
        const allUserData = await UserDetail.findAll();
        res.send(allUserData);
    } catch (error) {
        res.send(error.message);
    }
});
app.get('/profile', authenticateToken, checkConnection, async (req, res) => {
    try {
        const userData = await UserDetail.findOne({
            where: { email: req.email },
        });
        res.send(userData);
    } catch (error) {
        res.send(error.message);
    }
});

app.put('/profile', authenticateToken, checkConnection, async (req, res) => {
    try {
        const { firstname, lastname, mobile_No, age, gender, city, pincode } =
            req.body;

        const updatedResult = await UserDetail.update(
            {
                firstname,
                lastname,
                mobile_No,
                age,
                gender,
                city,
                pincode,
            },
            { where: { email: req.email } }
        );

        if (updatedResult) {
            res.send('Updated');
        }
    } catch (error) {
        console.log(error.message);
    }
});

app.delete('/account', authenticateToken, checkConnection, async (req, res) => {
    try {
        const id = req.query.id;
        const deleted = await UserDetail.destroy({ where: { id: id } });
        if (deleted) {
            res.send('Account Removed!');
        }
    } catch (error) {
        res.send(error.message);
    }
});

function authenticateToken(req, res, next) {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null) return res.sendStatus(401);
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decode) => {
            if (error) return res.sendStatus(401);
            req.email = decode;
            next();
        });
    } catch (error) {
        res.send(error.message);
    }
}

const PORT = 5020;
app.listen(PORT, () => {
    console.log('server run on port:', PORT);
});
