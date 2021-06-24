const {Sequelize, DataTypes} = require("sequelize");
const sequelize_mysql = require("../Connection/sequelize_mysql")

 const dept = sequelize_mysql.define("departments", {
     id:{
         type: DataTypes.INTEGER,
         allowNull:false,
         autoIncrement:true,
         primaryKey: true,
     },
     name: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.TEXT,
        allowNull:true,
    },

}, {
     modelName: "departments",
     createdAt: "created_at",
     updatedAt: "updated_at",
     initialAutoIncrement: 3
})

module.exports = dept
require("../relation_model/dept")