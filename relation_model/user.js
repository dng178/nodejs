const Users = require("../Models/user")
const Works = require("../Models/work")
const Dept = require("../Models/dept")

Users.belongsTo(Works,{
    foreignKey: "workId",
});
// console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
Users.belongsToMany(Dept,{
    through: "user_dept",
    foreignKey: "userId",
    otherKey: "deptId"
});
