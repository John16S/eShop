const Router = require('express')   //импортируем 'Router' из 'express'
const router = new Router() //создаём объект 'Router'

//методы по работе с пользователями
//1 парам. - 'url' по ктрм. отрабатывает роутер
//2 парам. - сам роутер

//регистрация пользователья
router.post('/registration')
//авторизация пользователья
router.post('/login')
//проверяет, авторизован пользователь или нет (по JWT токену)
router.get('/authorization', (req, res) =>{
    res.json({message: 'User authorization!'})
})
//--router.delete()-- метод удаление доработать

module.exports = router //экспортируем объект 'router'