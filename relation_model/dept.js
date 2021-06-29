const User = require("../Models/user");
const Dept = require("../Models/dept");


Dept.belongsToMany(User, {
    through: "user_dept",
    foreignKey: "deptId",
    otherKey: "userId",
})