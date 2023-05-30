const {Good, Category} = require('../models/models')
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

            const good = await Good.create({name, description, price, size, image: fileName, quantity, subcategorySubCategoryId})
            res.json(good)
        }
        catch (e){
            next(ApiError.badRequest(e.message));
        }

    }
    async getAll(req, res){
        let {subcategorySubCategoryId, limit, page} = req.query //берём подкатегорию из запроса

        page = page || 1
        limit = limit || 9    //9 товаров для каждой странице
        let offset = page * limit - limit //посчитаем отступ (2 * 9 - 9 = 9. Отступ - 9 товаров)

        let goods;

        if(!subcategorySubCategoryId){
            goods = await Good.findAndCountAll({limit, offset}); //findAndCountAll-для получении общего кол-во товаров
        }
        if(subcategorySubCategoryId){
            goods = await Good.findAndCountAll({where: {subcategorySubCategoryId}, limit, offset})
        }

        return res.json(goods)
    }
    async getById(req, res, next){
        try{
            const {good_id} = req.params
            const good = await Good.findOne(
                {
                    where: {good_id},
                }
            )
            return res.json(good)
        }
        catch (e){
            next(ApiError.badRequest(e.message));
        }

    }

}

module.exports = new GoodController() //экспортируем объект этого класса