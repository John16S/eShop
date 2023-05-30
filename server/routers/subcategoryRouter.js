const Router = require('express')   //импортируем 'Router' из 'express'
const router = new Router() //создаём объект 'Router'
const subcategoryController = require('../controllers/subcategoryController')
const checkRole = require('../middleware/checkRoleMiddleware')

//методы по работе с подкатегориями
//1 парам. - 'url' по ктрм. отрабатывает роутер
//2 парам. - сам роутер (функция)

//создаёт подкатегорию
router.post('/', checkRole('ADMIN'), subcategoryController.create)
//получает подкатегории
router.get('/', subcategoryController.getAll)
//--router.delete()-- метод удаление доработать

module.exports = router //экспортируем объект 'router'