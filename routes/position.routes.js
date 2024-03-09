let express = require('express');
const router = express.Router();
const PositionControllers = require('../controllers/position.controllers');

const { body, query, param, matchedData, validationResult } = require('express-validator');

const validationBody = [
    body('title').notEmpty().isString().trim().escape(),
]

const validationParamId = [
    param('id').notEmpty().isString().withMessage('ID not correct')
]

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
router.get('/', PositionControllers.getPositions)

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
router.get('/:id', validationParamId, PositionControllers.getPositionByID)

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
 *        description: Пример тела запроса, указываем название должности
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                title:
 *                  type: string
 *                  example: водитель
 *                  description: Position name
 */
router.post('/', validationBody, PositionControllers.addPosition)

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
router.patch('/:id', validationBody, validationParamId, PositionControllers.updatePosition)

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
router.delete('/:id', validationParamId, PositionControllers.deletePosition)

/**
 * @swagger
 *  /api/position/{id}/workers:
 *      get:
 *        tags: 
 *            - Position
 *        summary:
 *            Получение работников на должности по ID
 *        description:
 *            Получение работников на должности по ID 
 *        parameters:
 *            - name: id
 *              in: path
 *              description: ID должности работников которой нужно получить 
 *              required: true
 *        responses:
 *          200: 
 *            description: A successful response, get position
 *          400:
 *            description: bad request 
 */
router.get('/:id/workers', validationParamId, PositionControllers.getPositionWorkers)

/**
 * @swagger
 *  /api/position/{id}/departaments:
 *      get:
 *        tags: 
 *            - Position
 *        summary:
 *            Получение организаций в которых есть данная должность по ID
 *        description:
 *            Получение организаций в которых есть данная должность по ID 
 *        parameters:
 *            - name: id
 *              in: path
 *              description: ID должности, которую необходимо найти в ораганизациях 
 *              required: true
 *        responses:
 *          200: 
 *            description: A successful response, get position
 *          400:
 *            description: bad request 
 */
router.get('/:id/departaments', validationParamId, PositionControllers.getPositionDepartaments)

module.exports = router;