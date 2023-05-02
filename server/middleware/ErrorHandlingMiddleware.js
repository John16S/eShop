const ApiError = require('../error/ApiError') //Импортируем класс ApiError

//это функция и есть middleware (next-это функция)
module.exports = function(err, req, res, next){
    if (err instanceof ApiError){   //проверяем, является ли объект 'err' экземпляром класса 'ApiError'.
        //на клиент возвращаем ответ с статус кодом ктр берём из ошибки и сообщение
        return res.status(err.status).json({message: err.message})
    }
    //вдруг если сюда попала ошибка ктр не является экземпляром класса 'ApiError'
    return res.status(500).json({message: "Непредвиденная ошибка!"})
}
