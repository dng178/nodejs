const User = require("../Models/user");
const UserDept = require("../Models/UserDept")

UserDept.belongsTo(User, {
    foreignKey: "userId",
})