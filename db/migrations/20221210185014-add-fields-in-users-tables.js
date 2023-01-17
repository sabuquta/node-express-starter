'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
        queryInterface.addColumn('users',
        "isEmailVerified",
             {
            type: Sequelize.BOOLEAN,
            allowNull: true,
            defaultValue : false
          }),
    queryInterface.addColumn('users',"isEnabled" , {
            type: Sequelize.BOOLEAN,
            allowNull: true,
            defaultValue : true
          }),
      queryInterface.addColumn('users',"type" ,{
            type: Sequelize.STRING,
            allowNull : true,
            defaultValue : "individual", // company
        })
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('users', 'isEmailVerified');
    return queryInterface.removeColumn('users', 'isEnabled');
    return queryInterface.removeColumn('users', 'type');
  }
};
