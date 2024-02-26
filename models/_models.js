const Worker = require('./worker');
const Position = require('./position');
const Adress = require('./adress');
const Departament = require('./departament');

// (async () => {
//     try {
//         await Adress.sync({ force: true })
//         console.log('---------> Adress model created <---------')
//     } catch (error) {
//         console.error(error)
//     }
//     try {
//         await Departament.sync({ force: true })
//         console.log('---------> Departament model created <---------')
//     } catch (error) {
//         console.error(error)
//     }
//     try {
//         await Position.sync({ force: true })
//         console.log('---------> Position model created <---------')
//     } catch (error) {
//         console.error(error)
//     }
//     try {
//         await Worker.sync({ force: true })
//         console.log('---------> Worker model created <---------')
//     } catch (error) {
//         console.error(error)
//     }
// })()

// ------- Associations -------

Position.hasMany(Worker, { foreignKey: 'positionId' });
Worker.belongsTo(Position);

Departament.hasMany(Worker, { foreignKey: 'departamentId' });
Worker.belongsTo(Departament);

Adress.hasOne(Departament);
Departament.belongsTo(Adress);

Departament.belongsToMany(Position, { through: 'DepPositions' });
Position.belongsToMany(Departament, { through: 'DepPositions' });

Adress.hasOne(Worker);
Worker.belongsTo(Adress);

module.exports = {
    Position,
    Adress,
    Departament,
    Worker,
}