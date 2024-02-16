'use strict';

// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('positions', [{
      departamentId: '1',
      title: 'продавец',
    }], {});
    await queryInterface.bulkInsert('positions', [{
      departamentId: '1',
      title: 'иженер',
    }], {});
    await queryInterface.bulkInsert('positions', [{
      departamentId: '1',
      title: 'мастер',
    }], {});
    await queryInterface.bulkInsert('positions', [{
      departamentId: '1',
      title: 'директор',
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('positions', null, {});
  }
};
