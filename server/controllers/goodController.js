const {Good} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')    // нужен для перемещение файла

class GoodController{
    async create(req, res, next){
        try{
            const {name, description, price, size, quantity, subcategorySubCategoryId} = req.body;
            const {image} = req.files
            let fileName = uuid.v4() + ".jpg"
            await image.mv(path.resolve(__dirname, '..', 'static', fileName));

            const good = await Good.create({name, description, price, size, image, quantity, subcategorySubCategoryId})
            res.json(good)
        }
        catch (e){
            next(ApiError.badRequest(e.message));
        }

    }
    async getAll(req, res){

    }
    async getById(req, res){

    }

}

module.exports = new GoodController() //экспортируем объект этого класса