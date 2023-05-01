require('dotenv').config()  //чтоб сервер мог считывать файл ".env"

const express = require('express')  //импортируем express
const sequelize = require('./db.js')   //импортируем объект из файла db.js
const models = require('./models/models.js')   //импортируем модели из файла models.js
const cors = require('cors')    //импортируем 'cors'

const PORT = process.env.PORT || 5000    //задаём порт (берйм значение из файла ".env" или же назначаем 5000)

const app = express()   // с этой функции начинаестя наше приложение
app.use(cors()) //в функ 'use' передаём функ. 'cors', для запросов из браузера в БД
app.use(express.json()) //чтоб приложение могло парсить 'json' формат

/*------------------Get методы-------------------- */
//функ. 'get' - передаём 1 параметром 'url',
//                       2 параметром функцию, ктр. принимает 'request' и 'response'
app.get('/', (req, res) => {
    //В зависимость от систуации, на клиент возвращается разные статус коды
    //В функцию 'json' мы передаём тела ответа
    res.status(200).json({message: 'Working!'}) //Статус код 200 - запрос произошёл без ошибок
    res.status(404).json({message: 'Go to hell!'}) //Статус код 404 - код ошибки
})

const start = async () => { //функция ассинхронная т.к. все операции все БД ассинхронные
    try {
        await sequelize.authenticate()  //с помощью данной функ. происходить подключение к БД
        await sequelize.sync()  //сверяет состояние БД со схемой БД
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e){
        console.log(e)
    }
}

start()