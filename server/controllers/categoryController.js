const {Category} = require('../models/models')
const ApiError = require('../error/ApiError')

class CategoryController {
    //!! TODO проверки(обработчик ошибок)
    async create(req, res){
        const {name} = req.body; //извлекаем название из тела запроса
        const category = await Category.create({name})  //и передаём название в функцию создание
        return res.json(category)
    }
    async getAll(req, res){
        const categories = await Category.findAll();
        return res.json(categories)
    }
}

module.exports = new CategoryController() //экспортируем объект этого класса