require('dotenv').config();

const PositionServices = require('../services/position.services');

const db = require('../config/database');
const { Worker, Position, Adress, Departament } = require('../models/_models');


class PositionControllers {
    async getPositions(req, res) {
        try {
            const positions = await PositionServices.getPositions();
            res.status(200).send(positions);
        } catch (err) {
            res.status(400).json({
                err: err.message
            })
        }
    }

    async getPositionByID(req, res) {
        try {
            let positionID = req.params.id;
            const data = await PositionServices.getPositionByID(positionID);
            data === null ? res.status(400).send("должность не найдена") : res.status(200).send(data);
        } catch (err) {
            res.status(400).json({
                err: err.message
            })
        }
    }

    async addPosition(req, res) {
        try {
            let body = req.body;
            const data = await PositionServices.addPosition(body);
            res.status(200).send(data);
        } catch (err) {
            res.status(400).json({
                err: err.message
            })
        }
    }

    async updatePosition(req, res) {
        try {
            let body = req.body
            let positionID = req.params.id
            const data = await PositionServices.updatePosition(body, positionID);
            console.log(data);
            res.status(200).send(data);
        } catch (err) {
            res.status(400).json({
                err: err.message
            })
        }

    }
    async deletePosition(req, res) {
        try {
            let positionID = req.params.id;
            const data = await PositionServices.deletePosition(positionID);
            res.status(200).send(data);
        } catch (err) {
            res.status(400).json({
                err: err.message
            })
        }
    }
}

module.exports = new PositionControllers();