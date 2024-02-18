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
Worker.belongsTo(Position);

Departament.hasMany(Worker, { foreignKey: 'departamentId' });
Worker.belongsTo(Departament);

Worker.hasOne(Adress, { foreignKey: 'adressId' });
Adress.belongsTo(Worker);

Adress.hasOne(Departament, { foreignkey: 'adressId' });
Departament.belongsTo(Adress);

Departament.hasMany(Position, { foreignKey: 'departamentId' });
Position.belongsTo(Departament);

module.exports = {
    Position,
    Adress,
    Departament,
    Worker,
}