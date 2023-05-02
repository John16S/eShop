const Router = require('express')   //импортируем 'Router' из 'express'
const router = new Router() //создаём объект 'Router'

//методы по работе с товарами
//1 парам. - 'url' по ктрм. отрабатывает роутер
//2 парам. - сам роутер (функция)

//создаёт товар
router.post('/')
//получает товары
router.get('/')
//получает конкретный товар (для странички 'подробнее')
router.get('/:id')
//--router.delete()-- метод удаление доработать

module.exports = router //экспортируем объект 'router'