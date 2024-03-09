'use strict';

// /** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('depPositions', [{
            positionId: 1,
            departamentId: 1,
        }], {});
        await queryInterface.bulkInsert('depPositions', [{
            positionId: 2,
            departamentId: 1,
        }], {});
        await queryInterface.bulkInsert('depPositions', [{
            positionId: 3,
            departamentId: 1,
        }], {});
        await queryInterface.bulkInsert('depPositions', [{
            positionId: 4,
            departamentId: 1,
        }], {});
        await queryInterface.bulkInsert('depPositions', [{
            positionId: 2,
            departamentId: 2,
        }], {});
        await queryInterface.bulkInsert('depPositions', [{
            positionId: 1,
            departamentId: 2,
        }], {});
        await queryInterface.bulkInsert('depPositions', [{
            positionId: 2,
            departamentId: 4,
        }], {});
        await queryInterface.bulkInsert('depPositions', [{
            positionId: 2,
            departamentId: 3,
        }], {});
        await queryInterface.bulkInsert('depPositions', [{
            positionId: 4,
            departamentId: 3,
        }], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('depPositions', null, {});
    }
};
