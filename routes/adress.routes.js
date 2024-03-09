const express = require('express');
const router = express.Router();
const AdressControllers = require('../controllers/adress.controllers');

const { body, query, param, matchedData, validationResult } = require('express-validator');

const validationBody = [
    body('city').notEmpty().isString().trim().escape(),
    body('street').notEmpty().isString().trim().escape(),
    body('house').notEmpty().isInt(),
    body('building').notEmpty().isInt(),
    body('appt').notEmpty().isInt(),
]

const validationParamId = [
    param('id').notEmpty().isString().withMessage('ID not correct')
]

/**
 * @swagger
 *  /api/adress:
 *      get:
 *        tags: 
 *            - Adress
 *        summary:
 *            Получение списка всех адресов
 *        description:
 *            Получение списка всех адресов 
 *        responses:
 *          200: 
 *            description: A successful response, get all adresses
 *          400:
 *            description: bad request 
 */
router.get('/', AdressControllers.getAdresses)

/**
 * @swagger
 *  /api/adress/{id}:
 *      get:
 *        tags: 
 *            - Adress
 *        summary:
 *            Получение адреса по ID
 *        description:
 *            Получение адреса по ID 
 *        parameters:
 *            - name: id
 *              in: path
 *              description: ID адреса который нужно получить 
 *              required: true
 *        responses:
 *          200: 
 *            description: A successful response, get adress
 *          400:
 *            description: bad request 
 */
router.get('/:id', validationParamId, AdressControllers.getAdressByID)

/**
 *@swagger
 *  /api/adress:
 *    post:
 *      tags:
 *         - Adress
 *      summary: Добавление нового адреса 
 *      description: Добавление нового адеса, указываем city, street, house, building(по умолчанию null), appt
 *      requestBody:
 *        $ref: "#/components/requestBodies/Adress"
 *      responses:
 *          200: 
 *            description: Departament created
 *          400:
 *            description: bad request
 * components:
 *    requestBodies:
 *      Adress:
 *        description: Пример тела запроса, указываем city, street, house, building(по умолчанию null), appt
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                city:
 *                  type: string
 *                  example: Витебск
 *                  description: название города
 *                street:
 *                  type: string
 *                  example: Ленина
 *                  description: название улицы
 *                house:
 *                  type: integer
 *                  example: 3
 *                  description: номер дома
 *                building:
 *                  type: integer
 *                  example: null
 *                  description: корпус дома, если есть, по умолчанию null
 *                appt:
 *                  type: integer
 *                  example: 32
 *                  description: номер квартиры, если есть, по умолчанию null
 */
router.post('/', validationBody, AdressControllers.addAdress)

/**
 *@swagger
 *  /api/adress/{id}:
 *    patch:
 *      tags:
 *         - Adress
 *      summary: Обновление адреса 
 *      description: Обновление адреса пользователя/организации
 *      requestBody:
 *        $ref: "#/components/requestBodies/Adress"
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID адреса, который нужно обновить
 *          required: true
 *      responses:
 *          200: 
 *            description: adress is update
 *          400:
 *            description: bad request
 */
router.patch('/:id', validationBody, validationParamId, AdressControllers.updateAdress)

/**
 *@swagger
 *  /api/adress/{id}:
 *    delete:
 *      tags:
 *         - Adress
 *      summary: Удаление адреса 
 *      description: Удаление адреса по ID
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID адреса который надо удалить
 *          required: true
 *      responses:
 *          200: 
 *            description: adress is deleted
 *          400:
 *            description: bad request
 */
router.delete('/:id', validationParamId, AdressControllers.deleteAdress)

module.exports = router;