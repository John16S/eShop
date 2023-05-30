const Router = require('express')   //импортируем 'Router' из 'express'
const router = new Router() //создаём объект 'Router'
const goodController = require('../controllers/goodController')


//методы по работе с товарами
//1 парам. - 'url' по ктрм. отрабатывает роутер
//2 парам. - сам роутер (функция)

//создаёт товар
router.post('/', goodController.create)
//получает товары
router.get('/', goodController.getAll)
//получает конкретный товар (для странички 'подробнее')
router.get('/:good_id', goodController.getById)
//--router.delete()-- метод удаление доработать

module.exports = router //экспортируем объект 'router'