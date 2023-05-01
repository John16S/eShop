//Данный файл объединяет остальные роутеры
const Router = require('express')   //импортируем 'Router' из 'express'
const router = new Router() //создаём объект 'Router'
//импортируем все роутеры
const categoryRouter = require('./categoryRouter.js')
const goodRouter = require('./goodRouter.js')
const subcategoryRouter = require('./subcategoryRouter.js')
const userRouter = require('./userRouter.js')

//т.к. другие роутеры являются "подроутерами", указываем их здесь
//1 парам. - 'url' по ктрм. отрабатывает роутер
//2 парам. - сам роутер
router.use('/category', categoryRouter)
router.use('/good', goodRouter)
router.use('/subcategory', subcategoryRouter)
router.use('/user', userRouter)

module.exports = router //экспортируем объект 'router'