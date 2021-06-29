const User = require("../Models/user")
const Event = require("../Models/event")

Event.belongsToMany(User,{
    through: "user_ev",
    foreignKey: "evId",
    otherKey: "uId"
});
