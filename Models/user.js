const {Sequelize, DataTypes} = require("sequelize");
const sequelize_mysql = require("../Connection/sequelize_mysql")


const User = sequelize_mysql.define("user", {
    firstName: {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING
    },
    workId: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    salId:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: "user",
    createdAt: "created_at",
    updatedAt: "updated_at"
})
// users.sync({alter: true})
module.exports = User;
require("../relation_model/user")
