const UserDetail = require('../models/userDetail');
const bcrypt = require('bcrypt');

const createUser = async (reqBody) => {
    try {
        const { firstName, lastName, email } = reqBody;
        const newPassword = await bcrypt.hash(reqBody.password, 10);
        const created = await UserDetail.findOne({ email: email });
        if (!created) {
            const newUser = await UserDetail.create({
                firstName,
                lastName,
                email,
                password: newPassword,
            });
            await newUser.save();
            return newUser;
        }
        return null;
    } catch (error) {
        console.log(error.message);
    }
};

const getUserPass = async (ReqBodyEmail) => {
    try {
        const email = ReqBodyEmail;
        const encryptedPass = await UserDetail.findOne({ email: email });
        return encryptedPass ? encryptedPass.password : null;
    } catch (error) {
        console.log(error.message);
    }
};

const allUsersDetail = async (reqBody) => {
    try {
        const { page, limit } = reqBody;
        const skipDoc = (page - 1) * limit;
        const limitedData = await UserDetail.find().skip(skipDoc).limit(limit);
        return limitedData;
    } catch (error) {
        console.log(error.message);
    }
};

const userDetail = async (reqEmail) => {
    try {
        return await UserDetail.findOne({ email: reqEmail });
    } catch (error) {
        console.log(error.message);
    }
};

const updateUserDetail = async (reqBody, email) => {
    try {
        const { firstname, lastname, mobile_No, age, gender, city, pincode } =
            reqBody;

        return await UserDetail.updateOne(
            { email: email },
            {
                $set: {
                    firstname,
                    lastname,
                    mobile_No,
                    age,
                    gender,
                    city,
                    pincode,
                },
            }
        );
    } catch (error) {
        console.log(error.message);
    }
};

const deleteUser = async (id) => {
    try {
        return await UserDetail.deleteOne({ _id: id });
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
