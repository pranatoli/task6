const db = require('../config/database');
const { Worker, Position, Adress, Departament, DepPositions } = require('../models/_models');


class PositionServices {
    async getPositions() {
        return await Position.findAll();
    }

    async getPositionByID(positionID) {
        const data = await Position.findByPk(positionID);
        return data === null ? { status: 400, send: "должность не найдена" } : { status: 200, send: data };
    }

    async addPosition(body) {
        return await Position.create(body);
    }

    async updatePosition(body, positionID) {
        const findPos = await Position.findByPk(positionID);
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
        return data == 1 ? "должность удалена из базы" : "должности с данным ID не сущетвует"
    }

    async getPositionWorkers(positionID) {
        const exam = await Position.findByPk(positionID);
        const data = await Worker.findAll({
            include: {
                model: Position,
                where: {
                    id: positionID,
                }
            }
        });
        return exam === null ? { status: 400, send: "должность не найдена" } : { status: 200, send: data };
    }

    async getPositionDepartaments(positionID) {
        const exam = await Position.findByPk(positionID);
        const data = await Position.findAll({
            attributes: ["title"],
            include: {
                model: Departament,
                through: {
                    attributes: [],
                }
            },
            where: { id: positionID },
        });
        return exam === null ? { status: 400, send: "должность не найдена" } : { status: 200, send: data };
    }
}

module.exports = new PositionServices();