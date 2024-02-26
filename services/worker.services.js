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
}

module.exports = new WorkerServices();