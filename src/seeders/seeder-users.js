'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'giahuyduongdev@gnmail.com',
        password: '123456',
        firstName: 'Gia',
        lastName: 'Huy Duong',
        address: 'Ho Chi Minh city',
        gender: 1,
        roleId: 'R1',
        phonenumber: '0937195327',
        positionId: 'P0',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
