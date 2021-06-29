const User = require("../Models/user")
const Works = require("../Models/work")
const Dept = require("../Models/dept")
const UserDept = require("../Models/UserDept")
const Event = require("../Models/event")
const Sal = require("../Models/salaries")

User.belongsTo(Works,{
    foreignKey: "workId",
});

User.hasMany(UserDept,{
    foreignKey: "userId",
});

User.belongsToMany(Dept,{
    through: "user_dept",
    foreignKey: "userId",
    otherKey: "deptId"
});

User.belongsToMany(Event,{
    through: "user_ev",
    foreignKey: "uId",
    otherKey: "evId"
});

User.belongsTo(Sal, {
    foreignKey: "salId"
})