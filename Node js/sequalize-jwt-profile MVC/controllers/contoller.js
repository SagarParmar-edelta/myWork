require('dotenv').config();
const bcrypt = require('bcrypt');
const regValidation = require('../joi-validations/regValidation');
const loginValidation = require('../joi-validations/loginValidation');
const UserDetail = require('../models/userDetail');
const jwt = require('jsonwebtoken');
const dbservices = require('../services/dbservices.js');

const registration = async (req, res) => {
    try {
        await regValidation.validateAsync(req.body);

        const created = await dbservices.createUser(req.body);
        if (created) {
            res.send('User Registered Successfully!');
        } else {
            res.send('User is already exists');
        }
    } catch (err) {
        res.send(err.message);
    }
};

const login = async (req, res) => {
    try {
        await loginValidation.validateAsync(req.body);
        const { email, password } = req.body;
        const encryptedPass = await dbservices.getUserPass(email);
        if (!encryptedPass) {
            return res.send('User is not exists');
        }
        const match = await bcrypt.compare(password, encryptedPass);
        if (match) {
            const accessToken = jwt.sign(
                email,
                process.env.ACCESS_TOKEN_SECRET
            );
            res.send({ accessToken: accessToken });
        } else {
            res.send('Username or password Incorrect!');
        }
    } catch (err) {
        res.send(err.message);
    }
};

const getAllUsers = async (req, res) => {
    try {
        res.send(await dbservices.allUsersDetail());
    } catch (error) {
        res.send(error.message);
    }
};

const userProfile = async (req, res) => {
    try {
        res.send(await dbservices.userDetail(req.email));
    } catch (error) {
        res.send(error.message);
    }
};

const updateProfile = async (req, res) => {
    try {
        const updatedResult = await dbservices.updateUserDetail(
            req.body,
            req.email
        );
        if (updatedResult) {
            res.send('Updated');
        }
    } catch (error) {
        console.log(error.message);
    }
};

const deleteAccount = async (req, res) => {
    try {
        const deleted = await dbservices.deleteUser(req.body.id);
        if (deleted) {
            res.send('Account Removed!');
        }
    } catch (error) {
        res.send(error.message);
    }
};

module.exports = {
    registration,
    login,
    getAllUsers,
    userProfile,
    updateProfile,
    deleteAccount,
};
