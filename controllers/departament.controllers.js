const DepartamentServices = require('../services/departament.services');
const Sentry = require("@sentry/node");
const { validationResult } = require('express-validator');

class DepartamentControllers {
    async getDepartaments(req, res) {
        try {
            const departaments = await DepartamentServices.getDepartaments();
            res.status(200).send(departaments);
        } catch (err) {
            Sentry.captureException(err);
            res.status(400).json({
                err: err.message
            })
        }
    }

    async getDepartamentByID(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                let departamentID = req.params.id;
                const data = await DepartamentServices.getDepartamentByID(departamentID);
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

    async addDepartament(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                let body = req.body;
                const data = await DepartamentServices.addDepartament(body);
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

    async updateDepartament(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                let body = req.body
                let departamentID = req.params.id
                const data = await DepartamentServices.updateDepartament(body, departamentID);
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

    async deleteDepartament(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                let departamentID = req.params.id;
                const data = await DepartamentServices.deleteDepartament(departamentID);
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

    async getDepartamentPositions(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                let departamentID = req.params.id;
                const data = await DepartamentServices.getDepartamentPositions(departamentID);
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

module.exports = new DepartamentControllers();