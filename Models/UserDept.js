const {Sequelize, DataTypes} = require("sequelize");
const sequelize_mysql = require("../Connection/sequelize_mysql")

const user_dept = sequelize_mysql.define("user_dept", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement:true,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Users',
            key: 'userId'
        },
        allowNull:false,
        // autoIncrement:true,
        primaryKey: true,

    },
    deptId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Departments',
            key: 'deptId'
        },
        allowNull:false,
        // autoIncrement:true,
        primaryKey: true,
    },

}, {
    modelName: "user_dept",
    createdAt: "created_at",
    updatedAt: "updated_at",
})
module.exports = user_dept;
require("../relation_model/UserDept");