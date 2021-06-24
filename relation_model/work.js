const Works = require("../Models/work")
const Users = require("../Models/user")

// console.log(users);
Works.hasMany(Users, {
    foreignKey: "workId",
    // as: "users"
})