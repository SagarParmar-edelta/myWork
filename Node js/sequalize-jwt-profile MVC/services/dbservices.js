const UserDetail = require('../models/userDetail');
const bcrypt = require('bcrypt');

const createUser = async (reqBody) => {
    try {
        const { firstname, lastname, email } = reqBody;
        const newPassword = await bcrypt.hash(reqBody.password, 10);
        const [user, created] = await UserDetail.findOrCreate({
            where: { email: email },
            defaults: { firstname, lastname, email, password: newPassword },
        });
        return created;
    } catch (error) {
        console.log(error.message);
    }
};

const getUserPass = async (ReqBodyEmail) => {
    try {
        const email = ReqBodyEmail;
        const encryptedPass = await UserDetail.findOne({
            attributes: ['password'],
            where: { email: email },
        });
        return encryptedPass ? encryptedPass.password : null;
    } catch (error) {
        console.log(error.message);
    }
};

const allUsersDetail = async () => {
    try {
        return await UserDetail.findAll();
    } catch (error) {
        console.log(error.message);
    }
};

const userDetail = async (reqEmail) => {
    try {
        return await UserDetail.findOne({
            where: { email: reqEmail },
        });
    } catch (error) {
        console.log(error.message);
    }
};

const updateUserDetail = async (reqBody, email) => {
    try {
        const { firstname, lastname, mobile_No, age, gender, city, pincode } =
            reqBody;

        return await UserDetail.update(
            {
                firstname,
                lastname,
                mobile_No,
                age,
                gender,
                city,
                pincode,
            },
            { where: { email: email } }
        );
    } catch (error) {
        console.log(error.message);
    }
};

const deleteUser = async (id) => {
    try {
        return await UserDetail.destroy({ where: { id: id } });
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
    createUser,
    getUserPass,
    allUsersDetail,
    userDetail,
    updateUserDetail,
    deleteUser,
};
