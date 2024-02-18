const db = require('../config/database');
const { Worker, Position, Adress, Departament } = require('../models/_models');


class PositionServices {
    async getPositions() {
        return await Position.findAll();
    }
    async getPositionByID(positionID) {
        const data = await Position.findOne({ where: { id: positionID } });
        return data === null ? { status: 400, send: "должность не найдена" } : { status: 200, send: data };
    }
    async addPosition(body) {
        return await Position.create(body);
    }
    async updatePosition(body, positionID) {
        const findPos = await Position.findOne({ where: { id: positionID } });
        if (findPos === null) {
            return "должности с данным ID не сущетвует"
        }
        await Position.update(body, {
            where: {
                id: positionID
            }
        })
        return await Position.findOne({ where: { id: positionID } })
    }
    async deletePosition(positionID) {
        const data = await Position.destroy({
            where: {
                id: positionID
            }
        })
        return data == 1 ? "должность удалена" : "должности с данным ID не сущетвует"
    }

}

module.exports = new PositionServices();