let express = require('express');
const router = express.Router();
const db = require('../config/database');

// controllers
const { Worker, Position, Adress, Departament } = require('../models/_models');

/**
 * @swagger
 *  /api/position:
 *      get:
 *        tags: 
 *            - Position
 *        summary:
 *            Получение списка всех должностей
 *        description:
 *            Получение списка всех должностей 
 *        responses:
 *          200: 
 *            description: A successful response, get all positions
 *          400:
 *            description: bad request 
 */
router.get('/', async (req, res) => {
    try {
        const allData = await Position.findAll();
        res.status(200);
        res.send(allData);
    } catch (err) {
        res.status(400).json({
            err: err.message
        })
    }
})

/**
 * @swagger
 *  /api/position/{id}:
 *      get:
 *        tags: 
 *            - Position
 *        summary:
 *            Получение должности по ID
 *        description:
 *            Получение должности по ID 
 *        parameters:
 *            - name: id
 *              in: path
 *              description: ID должности которую нужно получить 
 *              required: true
 *        responses:
 *          200: 
 *            description: A successful response, get position
 *          400:
 *            description: bad request 
 */
router.get('/:id', async (req, res) => {
    try {
        let que = req.params.id
        const data = await Position.findOne({ where: { id: que } })
        res.status(200);
        res.send(data);
    } catch (err) {
        res.status(400).json({
            err: err.message
        })
    }
})

/**
 *@swagger
 *  /api/position:
 *    post:
 *      tags:
 *         - Position
 *      summary: Добавление новой должности 
 *      description: Добавление новой должности, указываем название и ID организации
 *      requestBody:
 *        $ref: "#/components/requestBodies/Position"
 *      responses:
 *          200: 
 *            description: Position created
 *          400:
 *            description: bad request
 * components:
 *    requestBodies:
 *      Position:
 *        description: Пример тела запроса, указываем ID ораганизации к которой относится должность и ее название
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                departamentId:
 *                  type: integer
 *                  example: 3
 *                  description: departament Id
 *                title:
 *                  type: string
 *                  example: водитель
 *                  description: Position name
 */
router.post('/', async (req, res) => {
    try {
        let body = req.body;
        const data = await Position.create(body);
        res.status(200);
        res.send(data);
    } catch (err) {
        res.status(400).json({
            err: err.message
        })
    }
})

/**
 *@swagger
 *  /api/position/{id}:
 *    patch:
 *      tags:
 *         - Position
 *      summary: Обновление должности 
 *      description: Обновление названия/организации должности
 *      requestBody:
 *        $ref: "#/components/requestBodies/Position"
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID должности, которую нужно удалить
 *          required: true
 *      responses:
 *          200: 
 *            description: position is update
 *          400:
 *            description: bad request
 */
router.patch('/:id', async (req, res) => {
    try {
        let body = req.body
        const data = await Position.update(body, {
            where: {
                id: req.params.id
            }
        })
        if (data[0] == 1) {
            const data = await Position.findOne({ where: { id: req.params.id } })
            res.status(200).send(data);
        } else res.status(400).send("Position not found");
    } catch (err) {
        res.status(400).json({
            err: err.message
        })
    }
})

/**
 *@swagger
 *  /api/position/{id}:
 *    delete:
 *      tags:
 *         - Position
 *      summary: Удаление должности 
 *      description: Удаление должности по ID
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID должности которую надо удалить
 *          required: true
 *      responses:
 *          200: 
 *            description: position is delete
 *          400:
 *            description: bad request
 */
router.delete('/:id', async (req, res) => {
    try {
        const data = await Position.destroy({
            where: {
                id: req.params.id
            }
        })
        console.log(data);
        if (data == 1) {
            res.status(200).send("Position is deleted");
        } else res.status(400).send("Position not found");
    } catch (err) {
        res.status(400).json({
            err: err.message
        })
    }
})

module.exports = router;