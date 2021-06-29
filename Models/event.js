const {Sequelize, DataTypes} = require("sequelize");
const sequelize_mysql = require("../Connection/sequelize_mysql")


const Event = sequelize_mysql.define("events", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    detail: {
        type: DataTypes.TEXT,
    },

}, {
    tableName: "events",
    createdAt: "created_at",
    updatedAt: "updated_at"
})
// event.sync();

module.exports = Event;
require("../relation_model/event")
