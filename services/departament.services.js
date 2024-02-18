const db = require('../config/database');
const { Worker, Position, Adress, Departament } = require('../models/_models');


class DepartamentServices {

    async getDepartaments() {
        return await Departament.findAll();
    }

    async getDepartamentByID(departamentID) {
        const data = await Departament.findOne({ where: { id: departamentID } });
        return data === null ? { status: 400, send: "организация не найдена" } : { status: 200, send: data };
    }

    async addDepartament(body) {
        return await Departament.create(body);
    }

    async updateDepartament(body, departamentID) {
        const findPos = await Departament.findOne({ where: { id: departamentID } });
        if (findPos === null) {
            return { status: 400, send: "организации с данным ID не сущетвует" }
        }
        await Departament.update(body, {
            where: {
                id: departamentID
            }
        })
        return await Departament.findOne({ where: { id: departamentID } })
    }
    async deleteDepartament(departamentID) {
        const data = await Position.destroy({
            where: {
                id: departamentID
            }
        })
        return data == 1 ? { status: 200, send: "организация удалена" } : { status: 400, send: "организации с данным ID не сущетвует" };
    }

}

module.exports = new DepartamentServices();