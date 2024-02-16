'use strict';

// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('workers', [{
      name: 'Екатерени',
      surname: 'Ивановна',
      middlename: 'Иванова',
      male: 'women',
      positionId: 2,
      departamentId: 2,
      adressId: 1,
      birthdate: '1980-10-23',
    }], {});
    await queryInterface.bulkInsert('workers', [{
      name: 'Иван',
      surname: 'Иванович',
      middlename: 'Иванов',
      male: 'man',
      positionId: 2,
      departamentId: 2,
      adressId: 1,
      birthdate: '1990-10-23',
    }], {});
    await queryInterface.bulkInsert('workers', [{
      name: 'Екатерени',
      surname: 'Ивановна',
      middlename: 'Иванова',
      male: 'women',
      positionId: 1,
      departamentId: 2,
      adressId: 1,
      birthdate: '2000-10-23',
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('positions', null, {});
  }
};
