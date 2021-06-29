const {Sequelize, DataTypes} = require("sequelize");
const sequelize_mysql = require("../Connection/sequelize_mysql")


const salaries = sequelize_mysql.define("salaries", {
    salary: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    bonusRate: {
        type: DataTypes.DOUBLE,

    },
    total: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    }

}, {
    tableName: "salaries",
    createdAt: "created_at",
    updatedAt: "updated_at"
})
// salaries.sync( { alter: true } );

module.exports = salaries;
require("../relation_model/salary")
