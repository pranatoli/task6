const PositionServices = require('../services/position.services');
const Sentry = require("@sentry/node");
const { validationResult } = require('express-validator');


class PositionControllers {
    async getPositions(req, res) {
        try {
            const positions = await PositionServices.getPositions();
            res.status(200).send(positions);
        } catch (err) {
            Sentry.captureException(err);
            res.status(400).json({
                err: err.message
            })
        }
    }

    async getPositionByID(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                let positionID = req.params.id;
                const data = await PositionServices.getPositionByID(positionID);
                res.status(data.status).send(data.send);
            } else {
                res.status(400);
                res.send({
                    errors: result.array()
                })
            }
        } catch (err) {
            Sentry.captureException(err);
            res.status(400).json({
                err: err.message
            })
        }
    }

    async addPosition(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                let body = req.body;
                const data = await PositionServices.addPosition(body);
                res.status(200).send(data);
            } else {
                res.status(400);
                res.send({
                    errors: result.array()
                })
            }
        } catch (err) {
            Sentry.captureException(err);
            res.status(400).json({
                err: err.message
            })
        }
    }

    async updatePosition(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                let body = req.body
                let positionID = req.params.id
                const data = await PositionServices.updatePosition(body, positionID);
                console.log(data);
                res.status(200).send(data);
            } else {
                res.status(400);
                res.send({
                    errors: result.array()
                })
            }
        } catch (err) {
            Sentry.captureException(err);
            res.status(400).json({
                err: err.message
            })
        }
    }

    async deletePosition(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                let positionID = req.params.id;
                const data = await PositionServices.deletePosition(positionID);
                res.status(200).send(data);
            } else {
                res.status(400);
                res.send({
                    errors: result.array()
                })
            }
        } catch (err) {
            Sentry.captureException(err);
            res.status(400).json({
                err: err.message
            })
        }
    }

    async getPositionWorkers(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                let positionID = req.params.id;
                const data = await PositionServices.getPositionWorkers(positionID);
                res.status(data.status).send(data.send);
            } else {
                res.status(400);
                res.send({
                    errors: result.array()
                })
            }
        } catch (err) {
            Sentry.captureException(err);
            res.status(400).json({
                err: err.message
            })
        }
    }

    async getPositionDepartaments(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                let positionID = req.params.id;
                const data = await PositionServices.getPositionDepartaments(positionID);
                res.status(data.status).send(data.send);
            } else {
                res.status(400);
                res.send({
                    errors: result.array()
                })
            }
        } catch (err) {
            Sentry.captureException(err);
            res.status(400).json({
                err: err.message
            })
        }
    }

}

module.exports = new PositionControllers();