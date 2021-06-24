const {Sequelize, DataTypes} = require("sequelize");
const sequelize_mysql = require("../Connection/sequelize_mysql")


const users = sequelize_mysql.define("users", {
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
}, {
    modelName: "users",
    createdAt: "created_at",
    updatedAt: "updated_at"
})

module.exports = users;
require("../relation_model/user")
