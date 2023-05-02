const ApiError = require('../error/ApiError')

class UserController{
    async registration(req, res){

    }
    async login(req, res){

    }
    //функция для проверки авторизации пользователья
    async authorizationCheck(req, res, next){
        const {id} = req.query
        if (!id){
            return next(ApiError.badRequest("Не задан ID"))
        }
        res.json(id)
        //res.json({message: 'User authorization and all checked!'})
    }
}

module.exports = new UserController() //экспортируем объект этого класса