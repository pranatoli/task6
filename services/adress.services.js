const { Worker, Position, Adress, Departament } = require('../models/_models');

class AdressServices {

    async getAdresses() {
        return await Adress.findAll();
    }

    async getAdressByID(adressID) {
        const data = await Adress.findByPk(adressID);
        return data === null ? { status: 400, send: "адресс не найден" } : { status: 200, send: data };
    }

    async addAdress(body) {
        return await Adress.create(body);
    }

    async updateAdress(body, adressID) {
        const findPos = await Adress.findByPk(adressID);
        if (findPos === null) {
            return { status: 400, send: "адреса с данным ID не сущетвует" }
        }
        await Adress.update(body, {
            where: {
                id: adressID
            }
        })
        return await Adress.findByPk(adressID)
    }

    async deleteAdress(adressID) {
        const data = await Adress.destroy({
            where: {
                id: adressID
            }
        })
        return data == 1 ? { status: 200, send: "адрес удален из базы" } : { status: 400, send: "адрес с данным ID не сущетвует" };
    }

}

module.exports = new AdressServices();