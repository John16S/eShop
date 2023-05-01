const sequelize = require('../db')  //импортируем объект из файла db.js
const {DataTypes, INTEGER} = require('sequelize')

//Внешние ключи Sequelize подставит сам, при описание типов связи

const User = sequelize.define('user',{
    user_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Basket = sequelize.define('basket',{
    basket_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
    //user_id - Sequelize подставит сам, при описание типов связи
})

const BasketGood = sequelize.define('basketGood',{
    basketGood_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
    //basket_id
    //good_id
})

const Good = sequelize.define('good',{
    good_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING},
    price: {type: DataTypes.DECIMAL, allowNull: false},
    size: {type: DataTypes.STRING, allowNull: false},
    image: {type: DataTypes.STRING},
    quantity: {type: DataTypes.INTEGER}
    //subcategory_id
})

const Category = sequelize.define('category',{
    category_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true}
})

const SubCategory = sequelize.define('subCategory',{
    subCategory_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true}
    //category_id
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketGood)
BasketGood.belongsTo(Basket)

Good.hasMany(BasketGood)
BasketGood.belongsTo(Good)

SubCategory.hasMany(Good)
Good.belongsTo(SubCategory)

Category.hasMany(SubCategory)
SubCategory.belongsTo(Category)

//экпортируем эти модели, чтоб в других файлах можно было их использовать
module.exports = {
    User,
    Basket,
    BasketGood,
    Good,
    SubCategory,
    Category
}