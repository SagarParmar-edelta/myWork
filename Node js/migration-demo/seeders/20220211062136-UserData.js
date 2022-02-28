'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'UserData',
            [
                {
                    name: 'John Doe',
                    email: 'john@gmail.com',
                    phoneNo: '1901231238',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'John Doe',
                    email: 'john@gmail.com',
                    phoneNo: '1901231238',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'John Doe',
                    email: 'john@gmail.com',
                    phoneNo: '1901231238',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'John Doe',
                    email: 'john@gmail.com',
                    phoneNo: '1901231238',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'John Doe',
                    email: 'john@gmail.com',
                    phoneNo: '1901231238',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'John Doe',
                    email: 'john@gmail.com',
                    phoneNo: '1901231238',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'John Doe',
                    email: 'john@gmail.com',
                    phoneNo: '1901231238',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('UserData', null, {});
    },
};
