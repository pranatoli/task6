'use strict';

// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('adresses', [{
      city: 'Витебск',
      street: 'Ленина',
      house: 4,
      building: null,
      appt: 23,
    }], {});
    await queryInterface.bulkInsert('adresses', [{
      city: 'Витебск',
      street: 'Фрунзе',
      house: 25,
      building: null,
      appt: 13,
    }], {});
    await queryInterface.bulkInsert('adresses', [{
      city: 'Витебск',
      street: 'Кирова',
      house: 14,
      building: null,
      appt: 223,
    }], {});
    await queryInterface.bulkInsert('adresses', [{
      city: 'Витебск',
      street: 'Ленина',
      house: 4,
      building: null,
      appt: 3,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('positions', null, {});
  }
};
