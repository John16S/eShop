//Здесь проверяем является ли пользователь админом
const jwt = require('jsonwebtoken')

module.exports = function (role){
    return function (req, res, next){
        if (req.method === "OPTIONS"){  //Если метод OPTIONS то пропускаем этот запрос
            next()
        }
        //Работаем только с POST, GET, PUT, DELETE запросами
        try {
            //из header берётся token
            //обычно в header пишется сначало тип токена а потом сам токен, к примеру:
            //Bearer dqwudn54afw45asfqwyf
            const token = req.headers.authorization.split(' ')[1];   //разделяем по пробелу и по 1 индексу берём
            //если токена нет, то возвращаем ошибку
            if (!token){
                res.status('401').json({message: "Не авторизован"})
            }
            //если же есть, то расскодируем...
            const decode = jwt.verify(token, process.env.SECRET_KEY) //проверяется на валидность
            if (decode.role !== role){
                res.status('403').json({message: "Нет доступа"})
            }

            req.userExist = decode; //к request в поле user добавим данные которые вытащили из токена, и во всех функциях этот user будет доступен
            next()

        } catch (e){
            res.status('401').json({message: "Не авторизован"})
        }

    };
}