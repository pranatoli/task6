const { Worker, Position, Adress, Departament } = require('../models/_models');


class DepartamentServices {

    async getDepartaments() {
        return await Departament.findAll();
    }

    async getDepartamentByID(departamentID) {
        const data = await Departament.findByPk(departamentID);
        return data === null ? { status: 400, send: "организация не найдена" } : { status: 200, send: data };
    }

    async addDepartament(body) {
        return await Departament.create(body);
    }

    async updateDepartament(body, departamentID) {
        const findPos = await Departament.findByPk(departamentID);
        if (findPos === null) {
            return { status: 400, send: "организации с данным ID не сущетвует" }
        }
        await Departament.update(body, {
            where: {
                id: departamentID
            }
        })
        return await Departament.findByPk(departamentID)
    }

    async deleteDepartament(departamentID) {
        const data = await Departament.destroy({
            where: {
                id: departamentID
            }
        })
        return data == 1 ? { status: 200, send: "организация удалена из базы" } : { status: 400, send: "организации с данным ID не сущетвует" };
    }

    async getDepartamentPositions(departamentID) {
        const exam = await Departament.findByPk(departamentID);
        const data = await Departament.findAll({
            attributes: ["depname"],
            include: {
                model: Position,
                through: {
                    attributes: [],
                }
            },
            where: { id: departamentID },
        });
        return exam === null ? { status: 400, send: "органиазация не найдена" } : { status: 200, send: data };
    }
}

module.exports = new DepartamentServices();