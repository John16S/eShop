const Router = require('express')   //импортируем 'Router' из 'express'
const router = new Router() //создаём объект 'Router'

//методы по работе с категориями
//1 парам. - 'url' по ктрм. отрабатывает роутер
//2 парам. - сам роутер (функция)

//создаёт категорию
router.post('/')
//получает категории
router.get('/')
//--router.delete()-- метод удаление доработать

module.exports = router //экспортируем объект 'router'