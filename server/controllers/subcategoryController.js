const {Subcategory} = require('../models/models')
const ApiError = require('../error/ApiError')

class SubcategoryController {
    async create(req, res){
        const {name, categoryCategoryId} = req.body; //извлекаем название из тела запроса
        const subcategory = await Subcategory.create({name, categoryCategoryId})  //и передаём название в функцию создание
        return res.json(subcategory)
    }
    async getAll(req, res){
        const subcategories = await Subcategory.findAll();
        return res.json(subcategories)
    }
}

module.exports = new SubcategoryController() //экспортируем объект этого класса