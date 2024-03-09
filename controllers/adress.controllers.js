const AdressServices = require('../services/adress.services');
const Sentry = require("@sentry/node");
const { validationResult } = require('express-validator');

class AdressControllers {

    async getAdresses(req, res) {
        try {
            const adress = await AdressServices.getAdresses();
            res.status(200).send(adress);
        } catch (err) {
            Sentry.captureException(err);
            res.status(400).json({
                err: err.message
            })
        }
    }

    async getAdressByID(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                let adressID = req.params.id;
                const data = await AdressServices.getAdressByID(adressID);
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

    async addAdress(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                let body = req.body;
                const data = await AdressServices.addAdress(body);
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

    async updateAdress(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                let body = req.body
                let adressID = req.params.id
                const data = await AdressServices.updateAdress(body, adressID);
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

    async deleteAdress(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                let adressID = req.params.id;
                const data = await AdressServices.deleteAdress(adressID);
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

module.exports = new AdressControllers()