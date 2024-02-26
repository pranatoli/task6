const express = require('express');
const router = express.Router();
const WorkerControllers = require('../controllers/worker.controllers');

const { body, query, param, matchedData, validationResult } = require('express-validator');

const validationBody = [
    body('name').notEmpty().isString().trim().escape(),
    body('surname').notEmpty().isString().trim().escape(),
    body('middlename').notEmpty().isString().trim().escape(),
    body('male').notEmpty().isString().isIn(['man', 'woman']).withMessage('Male must be man or woman only'),
    body('positionId').notEmpty().isInt(),
    body('departamentId').notEmpty().isInt(),
    body('adressId').notEmpty().isInt(),
    body('birthdate').notEmpty().isDate(),
]

const validationParamId = [
    param('id').notEmpty().isInt().withMessage('ID not correct')
]

/**
 * @swagger
 *  /api/worker:
 *      get:
 *        tags: 
 *            - Worker
 *        summary:
 *            Получение списка всех работников
 *        description:
 *            Получение списка всех работников 
 *        responses:
 *          200: 
 *            description: A successful response, get all workers
 *          400:
 *            description: bad request 
 */
router.get('/', WorkerControllers.getWorkers)

/**
 * @swagger
 *  /api/worker/{id}:
 *      get:
 *        tags: 
 *            - Worker
 *        summary:
 *            Получение данных работника по ID
 *        description:
 *            Получение данных работника по ID 
 *        parameters:
 *            - name: id
 *              in: path
 *              description: ID работника, данные которого нужно получить 
 *              required: true
 *        responses:
 *          200: 
 *            description: A successful response, get worker
 *          400:
 *            description: bad request 
 */
router.get('/:id', validationParamId, WorkerControllers.getWorkerByID)

/**
 *@swagger
 *  /api/worker:
 *    post:
 *      tags:
 *         - Worker
 *      summary: Добавление нового работника 
 *      description: Добавление нового работника, указываем name, surname, middlename, male, positionId, departamentId, adressId, birthdate
 *      requestBody:
 *        $ref: "#/components/requestBodies/Worker"
 *      responses:
 *          200: 
 *            description: Departament created
 *          400:
 *            description: bad request
 * components:
 *    requestBodies:
 *      Worker:
 *        description: Пример тела запроса, указываем name, surname, middlename, male, positionId, departamentId, adressId, birthdate
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                  example: Дмитрий
 *                  description: имя работника
 *                surname:
 *                  type: string
 *                  example: Синичкин
 *                  description: фамилия работника
 *                middlename:
 *                  type: string
 *                  example: Петров
 *                  description: отчество работника
 *                male:
 *                  type: string
 *                  example: men
 *                  description: пол работника
 *                positionId:
 *                  type: integer
 *                  example: 1
 *                  description: ID должности работника
 *                departamentId:
 *                  type: integer
 *                  example: 1
 *                  description: ID отделения работника
 *                adressId:
 *                  type: integer
 *                  example: 1
 *                  description: ID адреса работника
 *                birthdate:
 *                  type: date
 *                  example: 1990-10-23
 *                  description: дата рождения работника
 */
router.post('/', validationBody, WorkerControllers.addWorker)

/**
 *@swagger
 *  /api/worker/{id}:
 *    patch:
 *      tags:
 *         - Worker
 *      summary: Обновление данных работника 
 *      description: Обновление данных работника
 *      requestBody:
 *        $ref: "#/components/requestBodies/Worker"
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID работника, данные которого нужно обновить
 *          required: true
 *      responses:
 *          200: 
 *            description: worker is update
 *          400:
 *            description: bad request
 */
router.patch('/:id', validationBody, validationParamId, WorkerControllers.updateWorker)

/**
 *@swagger
 *  /api/worker/{id}:
 *    delete:
 *      tags:
 *         - Worker
 *      summary: Удаление данных работника 
 *      description: Удаление данных работника по ID
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID работника, данные которого надо удалить
 *          required: true
 *      responses:
 *          200: 
 *            description: worker is deleted
 *          400:
 *            description: bad request
 */
router.delete('/:id', validationParamId, WorkerControllers.deleteWorker)

module.exports = router;