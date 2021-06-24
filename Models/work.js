const {Sequelize, DataTypes} = require("sequelize");
const sequelize_mysql = require("../Connection/sequelize_mysql")

const works = sequelize_mysql.define("works", {
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
    createdAt: "created_at",
    updatedAt: "updated_at"
})

module.exports = works

require("../relation_model/work")