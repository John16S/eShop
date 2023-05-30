const ApiError = require('../error/ApiError')   //Импортируем класс для обработки ошибок
const bcrypt = require('bcrypt')    //для хеширование пароля
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

const generateJwt = (id, email, role) => {
    //role - по дефолту USER
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}
class UserController{
    async registration(req, res, next){
        const {email, password, role} = req.body;
        if (!email || !password){
            return next(ApiError.badRequest('Некоректный email или password'));
        }

        //Ищем пользователя с таким же email в БД
        const userExist = await User.findOne({where: {email}});
        if (userExist){
            return next(ApiError.badRequest('Пользователь с таким email уже существует'));
        }

        //Если не нашли
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({email, role, password: hashPassword}) //создаём пользователя
        const basket = await Basket.create({userUserId: user.user_id})    //создаём козину для пользователя
        const token = generateJwt(user.user_id, user.email, user.role)

        return res.json({token});
    }

    async login(req, res, next){
        const {email, password} = req.body
        const userExist = await User.findOne({where: {email}});
        if (!userExist){
            return next(ApiError.InternalServerError('Неправильный email'));
        }

        let comparePassword = bcrypt.compareSync(password, userExist.password)
        if (!comparePassword){
            return next(ApiError.badRequest('Указан неверный пароль'))
        }

        const token = generateJwt(userExist.user_id, userExist.email, userExist.role)
        return res.json({token})
    }

    //функция для проверки авторизации пользователья
    async authorizationCheck(req, res, next){
        const token = generateJwt(req.userExist.user_id, req.userExist.email, req.userExist.role)
        return res.json({token})
    }
}

module.exports = new UserController() //экспортируем объект этого класса