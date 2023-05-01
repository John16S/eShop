const Router = require('express')   //импортируем 'Router' из 'express'
const router = new Router() //создаём объект 'Router'

//методы по работе с товарами
//1 парам. - 'url' по ктрм. отрабатывает роутер
//2 парам. - сам роутер
router.post('/') //создаёт товар
router.get('/') //получает товары
router.get('/:id') //получает конкретный товар (для странички 'подробнее')
//--router.delete()-- метод удаление доработать

module.exports = router //экспортируем объект 'router'