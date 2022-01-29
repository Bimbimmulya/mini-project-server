'use strict';
const passwordHash = require('password-hash');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const merchants = [];
    for (let i = 0; i < 100; i++) {
      merchants.push({
        password: passwordHash.generate(`merchants${i}`),
        name: `merchant${i}`,
        address:  `ciledug${i}`,
        join_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    return queryInterface.bulkInsert('Merchants', merchants, {});
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Merchants', null, {
      truncate: true
    });
  }
};