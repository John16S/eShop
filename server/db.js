const {Sequelize} = require('sequelize') // деструктурируем, т.к. нужен только класс Sequelize

//экспортируем объект класса Sequelize
module.exports = new Sequelize(
    //в конструкторе указываем конфигурацию (пользователь, пароль, т.д.)
    process.env.DB_NAME, //Название БД
    process.env.DB_USER, //Пользователь
    process.env.DB_PASSWORD, //Пароль
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)