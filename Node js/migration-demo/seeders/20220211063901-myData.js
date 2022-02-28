'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'UserData',
            [
                {
                    name: 'Sagar Doe',
                    email: 'Sagar@gmail.com',
                    phoneNo: '1901231238',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    address: 'porbandar',
                },
                {
                    name: 'Sagar Doe',
                    email: 'Sagar@gmail.com',
                    phoneNo: '1901231238',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    address: 'porbandar',
                },
                {
                    name: 'Sagar Doe',
                    email: 'Sagar@gmail.com',
                    phoneNo: '1901231238',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    address: 'porbandar',
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('UserData', {});
    },
};
