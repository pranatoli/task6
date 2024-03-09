const sequelize = require('../config/database');
const { Worker, Position, Adress, Departament } = require('../models/_models');

class WorkerServices {
    async getWorkers() {
        return await Worker.findAll();
    }

    async getWorkerByID(workerID) {
        const data = await Worker.findByPk(workerID);
        return data === null ? { status: 400, send: "работник не найден" } : { status: 200, send: data };
    }

    async addWorker(body) {
        return await Worker.create(body);
    }

    async updateWorker(body, workerID) {
        const findPos = await Worker.findByPk(workerID);
        if (findPos === null) {
            return { status: 400, send: "работника с данным ID не сущетвует" }
        }
        await Worker.update(body, {
            where: {
                id: workerID
            }
        })
        return await Worker.findByPk(workerID)
    }

    async deleteWorker(workerID) {
        const data = await Worker.destroy({
            where: {
                id: workerID
            }
        })
        return data == 1 ? { status: 200, send: "работник удален из базы" } : { status: 400, send: "работника с данным ID не сущетвует" };
    }

    async getWorkerInfoByID(workerID) {
        const data = await sequelize.query(`
            SELECT city, street, house, building, appt, name, surname, middlename, male, birthdate, depname, title  FROM adresses
              iNNER JOIN workers
                ON adresses.id = "adressId"
              iNNER JOIN departaments
                ON departaments.id = "departamentId"
              iNNER JOIN positions
                ON positions.id = "positionId"
                where workers.id = ${workerID};
                    `);
        return data[0].length === 0 ? { status: 400, send: "работник не найден" } : { status: 200, send: data[0] };
    }

    async getWorkerPosition(workerID) {
        const data = await Position.findAll({
            include: {
                model: Worker,
                where: {
                    id: workerID
                },
            },
        })
        return data[0].length === 0 ? { status: 400, send: "работник не найден" } : { status: 200, send: data[0] };
    }
    async getWorkerDepartament(workerID) {
        const data = await Departament.findAll({
            include: {
                model: Worker,
                where: {
                    id: workerID
                },
            },
        })
        return data[0].length === 0 ? { status: 400, send: "работник не найден" } : { status: 200, send: data[0] };
    }
    async getWorkerAdress(workerID) {
        const data = await Adress.findAll({
            include: {
                model: Worker,
                where: {
                    id: workerID
                },
            },
        })
        return data[0].length === 0 ? { status: 400, send: "работник не найден" } : { status: 200, send: data[0] };
    }
}

module.exports = new WorkerServices();