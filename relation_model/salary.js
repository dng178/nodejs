const Works = require("../Models/work")
const Sal = require("../Models/salaries")
const User = require("../Models/user")

Sal.belongsToMany(Works,{
    through: "user",
    foreignKey: "salId",
    otherKey: "workId"
});

Sal.hasMany(User,{
    foreignKey: "salId"
})