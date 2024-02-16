const Worker = require('./worker');
const Position = require('./position');
const Adress = require('./adress');
const Departament = require('./departament');

// Adress.sync({ force: false }).then(() => {
//     console.log('---------> Adress model created <---------');
// });
// Departament.sync({ force: false }).then(() => {
//     console.log('---------> Departament model created <---------');
// });

// Position.sync({ force: false }).then(() => {
//     console.log('---------> Position model created <---------');
// });
// Worker.sync({ force: false }).then(() => {
//     console.log('---------> Worker model created <---------');
// });

// ------- Associations -------

Position.hasMany(Worker, { foreignKey: 'positionId' });
Worker.belongsTo(Position, { foreignKey: 'positionId' });

Worker.hasOne(Departament, { foreignKey: 'departamentId' });
Departament.belongsTo(Worker, { foreignKey: 'departamentId' });

Worker.hasOne(Adress, { foreignKey: 'adressId' });
Adress.belongsTo(Worker, { foreignkey: 'adressId' });

Departament.hasOne(Adress, { foreignkey: 'adressId' });
Adress.belongsTo(Departament, { foreignKey: 'adressId' });

Departament.hasMany(Position, { foreignKey: 'departamentId' });
Position.belongsTo(Departament, { foreignKey: 'departamentId' });

module.exports = {
    Position,
    Adress,
    Departament,
    Worker,
}