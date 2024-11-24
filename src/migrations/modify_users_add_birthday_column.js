"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        "Users", // table name
        "birthday", // new field name
        {
          type: Sequelize.DATE,
          allowNull: true,
        }
      ),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.removeColumn("Users", "birthday")]);
  },
};
