'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return await queryInterface.addColumn(
            'UserData',
            'address',
            Sequelize.STRING
        );
    },

    async down(queryInterface) {
        return await queryInterface.removeColumn('UserData', 'address');
    },
};
