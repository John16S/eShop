//Класс расширяет класс 'Error'
class ApiError extends Error{
    constructor(status, message) {
        super();    //вызываем родительский конструктор
        this.status = status
        this.message = message

    }

    //Статические функции можно вызывать без создание объекта класса
    static badRequest(message){
        return new ApiError(404, message)
    }

    static InternalServerError(message){   //внутренняя ошибка сервера
        return new ApiError(500, message)
    }

    static forbidden(message){  //нет доступа
        return new ApiError(403, message)
    }
}

module.exports = ApiError //экпортируем этот класс