class UserController{
    async registration(req, res){

    }
    async login(req, res){

    }
    //функция для проверки авторизации пользователья
    async authorizationCheck(req, res){
        const {id} = req.query
        res.json(id)
        //res.json({message: 'User authorization and all checked!'})
    }
}

module.exports = new UserController() //экспортируем объект этого класса