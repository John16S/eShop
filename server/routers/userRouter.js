const Router = require('express')   //импортируем 'Router' из 'express'
const router = new Router() //создаём объект 'Router'
const userController = require('../controllers/userController.js') //импортируем котроллер

//методы по работе с пользователями
//1 парам. - 'url' по ктрм. отрабатывает роутер
//2 парам. - сам роутер (функция)

//регистрация пользователья
router.post('/registration', userController.registration) //userController.registration без скобок, т.к. мы функцию не вызываем, а передаем как объект
//авторизация пользователья
router.post('/login', userController.login)
//проверяет, авторизован пользователь или нет (по JWT токену)
router.get('/authorization', userController.authorizationCheck)

//--router.delete()-- метод удаление доработать

module.exports = router //экспортируем объект 'router'