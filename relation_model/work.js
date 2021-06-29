const Works = require("../Models/work")
const User = require("../Models/user")
const Sal = require("../Models/salaries")

Works.hasMany(User, {
    foreignKey: "workId",

})

Works.belongsToMany(Sal,{
    through: "user",
    foreignKey: "workId",
    otherKey: "salId"
})