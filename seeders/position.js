'use strict';

// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('positions', [{
      title: 'продавец',
    }], {});
    await queryInterface.bulkInsert('positions', [{
      title: 'иженер',
    }], {});
    await queryInterface.bulkInsert('positions', [{
      title: 'мастер',
    }], {});
    await queryInterface.bulkInsert('positions', [{
      title: 'директор',
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('positions', null, {});
  }
};
