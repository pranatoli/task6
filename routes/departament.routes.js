const express = require('express');
const router = express.Router();
const DepartamentControllers = require('../controllers/departament.controllers');

const { body, query, param, matchedData, validationResult } = require('express-validator');

const validationBody = [
    body('name').notEmpty().isString().trim().escape(),
    body('adressId').notEmpty().isInt(),
]

const validationParamId = [
    param('id').notEmpty().isString().withMessage('ID not correct')
]

/**
 * @swagger
 *  /api/departament:
 *      get:
 *        tags: 
 *            - Departament
 *        summary:
 *            Получение списка всех организаций
 *        description:
 *            Получение списка всех организаций 
 *        responses:
 *          200: 
 *            description: A successful response, get all departaments
 *          400:
 *            description: bad request 
 */
router.get('/', validationBody, DepartamentControllers.getDepartaments)

/**
 * @swagger
 *  /api/departament/{id}:
 *      get:
 *        tags: 
 *            - Departament
 *        summary:
 *            Получение организации по ID
 *        description:
 *            Получение организации по ID 
 *        parameters:
 *            - name: id
 *              in: path
 *              description: ID организации которую нужно получить 
 *              required: true
 *        responses:
 *          200: 
 *            description: A successful response, get departament
 *          400:
 *            description: bad request 
 */
router.get('/:id', validationParamId, DepartamentControllers.getDepartamentByID)

/**
 *@swagger
 *  /api/departament:
 *    post:
 *      tags:
 *         - Departament
 *      summary: Добавление новой организации 
 *      description: Добавление новой организации, указываем название и ID адреса
 *      requestBody:
 *        $ref: "#/components/requestBodies/Departament"
 *      responses:
 *          200: 
 *            description: Departament created
 *          400:
 *            description: bad request
 * components:
 *    requestBodies:
 *      Departament:
 *        description: Пример тела запроса, указываем ID адреса организации и ее название
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                adressId:
 *                  type: integer
 *                  example: 3
 *                  description: adress Id
 *                name:
 *                  type: string
 *                  example: отделение №5
 *                  description: Departament name
 */
router.post('/', validationBody, DepartamentControllers.addDepartament)

/**
 *@swagger
 *  /api/departament/{id}:
 *    patch:
 *      tags:
 *         - Departament
 *      summary: Обновление организации 
 *      description: Обновление названия/ID адреса организации
 *      requestBody:
 *        $ref: "#/components/requestBodies/Departament"
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID организации, которую нужно обновить
 *          required: true
 *      responses:
 *          200: 
 *            description: departament is update
 *          400:
 *            description: bad request
 */
router.patch('/:id', validationBody, validationParamId, DepartamentControllers.updateDepartament)

/**
 *@swagger
 *  /api/departament/{id}:
 *    delete:
 *      tags:
 *         - Departament
 *      summary: Удаление организации 
 *      description: Удаление организации по ID
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID организации которую надо удалить
 *          required: true
 *      responses:
 *          200: 
 *            description: departament is delete
 *          400:
 *            description: bad request
 */
router.delete('/:id', validationParamId, DepartamentControllers.deleteDepartament)

module.exports = router;