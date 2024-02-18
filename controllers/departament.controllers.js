require('dotenv').config();

const DepartamentServices = require('../services/departament.services');

const db = require('../config/database');
const { Worker, Position, Adress, Departament } = require('../models/_models');


class DepartamentControllers {
    async getDepartaments(req, res) {
        try {
            const departaments = await DepartamentServices.getDepartaments();
            res.status(200).send(departaments);
        } catch (err) {
            res.status(400).json({
                err: err.message
            })
        }
    }

    async getDepartamentByID(req, res) {
        try {
            let departamentID = req.params.id;
            const data = await DepartamentServices.getDepartamentByID(departamentID);
            res.status(data.status).send(data.send);
        } catch (err) {
            res.status(400).json({
                err: err.message
            })
        }
    }

    async addDepartament(req, res) {
        try {
            let body = req.body;
            const data = await DepartamentServices.addDepartament(body);
            res.status(200).send(data);
        } catch (err) {
            res.status(400).json({
                err: err.message
            })
        }
    }

    async updateDepartament(req, res) {
        try {
            let body = req.body
            let departamentID = req.params.id
            const data = await DepartamentServices.updateDepartament(body, departamentID);
            console.log(data);
            res.status(200).send(data);
        } catch (err) {
            res.status(400).json({
                err: err.message
            })
        }

    }
    async deleteDepartament(req, res) {
        try {
            let departamentID = req.params.id;
            const data = await DepartamentServices.deleteDepartament(departamentID);
            res.status(data.status).send(data.send);
        } catch (err) {
            res.status(400).json({
                err: err.message
            })
        }
    }
}

module.exports = new DepartamentControllers();