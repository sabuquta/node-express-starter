'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example: */
        await queryInterface.bulkInsert('roles', [
            {
                id: 1,
                role_name_ar: 'مدير النظام',
                role_name_en: 'SUPER_ADMIN',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 2,
                role_name_ar: 'المسؤول',
                role_name_en: 'ADMIN',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 3,
                role_name_ar: 'مستخدم',
                role_name_en: 'USER',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});

    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('roles', null, {});
    }
};
