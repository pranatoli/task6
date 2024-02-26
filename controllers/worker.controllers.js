const WorkerServices = require('../services/worker.services');
const Sentry = require("@sentry/node");
const { validationResult } = require('express-validator');

class WorkerControllers {
    async getWorkers(req, res) {
        try {
            const workers = await WorkerServices.getWorkers();
            res.status(200).send(workers);
        } catch (err) {
            Sentry.captureException(err);
            res.status(400).json({
                err: err.message
            })
        }
    }

    async getWorkerByID(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                let workerID = req.params.id;
                const data = await WorkerServices.getWorkerByID(workerID);
                res.status(data.status).send(data.send);
            } else {
                res.status(400);
                res.send({
                    errors: result.array()
                })
            }
        } catch (err) {
            Sentry.captureException(err)
            res.status(400).json({
                err: err.message
            })
        }
    }

    async addWorker(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                let body = req.body;
                const data = await WorkerServices.addWorker(body);
                res.status(200).send(data);
            } else {
                res.status(400);
                res.send({
                    errors: result.array()
                })
            }
        } catch (err) {
            Sentry.captureException(err)
            res.status(400).json({
                err: err.message
            })
        }
    }

    async updateWorker(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                let body = req.body
                let workerID = req.params.id
                const data = await WorkerServices.updateWorker(body, workerID);
                console.log(data);
                res.status(200).send(data);
            } else {
                res.status(400);
                res.send({
                    errors: result.array()
                })
            }
        } catch (err) {
            Sentry.captureException(err)
            res.status(400).json({
                err: err.message
            })
        }
    }

    async deleteWorker(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                let workerID = req.params.id;
                const data = await WorkerServices.deleteWorker(workerID);
                res.status(data.status).send(data.send);
            } else {
                res.status(400);
                res.send({
                    errors: result.array()
                })
            }
        } catch (err) {
            Sentry.captureException(err)
            res.status(400).json({
                err: err.message
            })
        }
    }
}

module.exports = new WorkerControllers();