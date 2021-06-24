const Users = require("../Models/user");
const Dept = require("../Models/dept");


Dept.belongsToMany(Users, {
    through: "user_dept",
    foreignKey: "deptId",
    otherKey: "userId",
})