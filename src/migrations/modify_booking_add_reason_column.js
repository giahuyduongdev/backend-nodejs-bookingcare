"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        "Bookings", // table name
        "reasib", // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        }
      ),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.removeColumn("Bookings", "reason")]);
  },
};
