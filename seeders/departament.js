'use strict';

// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('departaments', [{
      name: 'отделение №1',
      adressId: 1,
    }], {});
    await queryInterface.bulkInsert('departaments', [{
      name: 'отделение №2',
      adressId: 2,
    }], {});
    await queryInterface.bulkInsert('departaments', [{
      name: 'отделение №3',
      adressId: 3,
    }], {});
    await queryInterface.bulkInsert('departaments', [{
      name: 'отделение №4',
      adressId: 4,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('positions', null, {});
  }
};
