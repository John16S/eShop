const Router = require('express')   //импортируем 'Router' из 'express'
const router = new Router() //создаём объект 'Router'

//методы по работе с подкатегориями
//1 парам. - 'url' по ктрм. отрабатывает роутер
//2 парам. - сам роутер
router.post('/') //создаёт подкатегорию
router.get('/') //получает подкатегории
//--router.delete()-- метод удаление доработать

module.exports = router //экспортируем объект 'router'