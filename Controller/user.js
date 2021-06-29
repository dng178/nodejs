const User = require("../Models/user")
const Sals = require("../Models/salaries")
const Work = require("../Models/work")
const sequelize = require("../Connection/sequelize_mysql");

class UserController {
    constructor() {
    }
    //get all users
    async get(req, res) {
        try {
            let user = await User.findAll({
                include: [
                    {
                        all:true,
                        nested: true,
                    }
                ],});
            return res.json({
                data: user
            })
        } catch (err) {
            return res.json({
                exception: err.message
            })
        }
    }
    //find and count all users through salaries
    async getS(req, res) {
        try {
            let user = await User.findAndCountAll({
                attributes:['firstName','lastName','workId'],
                where:{ salId: 1},
                include: [
                    {
                        model: Sals,
                        attributes:['salary','bonusRate','total'],
                        required: true,
                    }
                ]
            });
            return res.json({
                data: user
            })
        } catch (err) {
            return res.json({
                exception: err.message
            })
        }
    }

    //add new user
    async post(req, res) {
        try {
            let user = await User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                workId: req.body.workId,
                salId: req.body.salId,
            });
            return res.json({
                data: user
            })
        } catch (err) {
            return res.json({
                exception: err.message
            })
        }
    }

    //update user with input id
    async put(req, res) {
        try {
            let user = await User.update({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    workId: req.body.workId,
                    salId: req.body.salId,
                }, {
                    where: {
                        id: req.body.id
                    }
                }
            );
            return res.json({
                data: user
            })
        } catch (err) {
            return res.json({
                exception: err.message
            })
        }
    }

    //delete user with input id
    async delete(req, res) {
        try {
            let user = await User.destroy({
                    where: {
                        id: req.body.id
                    }
                }
            );
            await res.send("Delete successful")
            return res.json({
                data: user
            })
        } catch (err) {
            return res.json({
                exception: err.message
            })
        }
    }

    //add new work + salary + user using unmanaged transaction
    async createThree(req, res) {
        const t = await sequelize.transaction();
        try {

            let work = await Work.create({
                name: req.body.name,
                type: req.body.type,
                description: req.body.description,
            }, {transaction: t});
            let sal = await Sals.create({
                salary: req.body.salaries[0].salary,
                bonusRate: req.body.salaries[0].bonusRate,
                total: req.body.salaries[0].total
            }, {transaction: t});

            let us = await User.create({
                firstName: req.body.users[0].firstName,
                lastName: req.body.users[0].lastName,
                workId: work.id,
                salId: sal.id,
            }, {transaction: t});
            await t.commit()
            return res.json({
                data: work, sal, us
            })
        } catch (err) {
            await t.rollback();
            return res.json({
                exception: err.message
            })
        }
    }

    async updateThree(req, res) {
        const t = await sequelize.transaction();
        try {

            let work = await Work.update({
                name: req.body.name,
                type: req.body.type,
                description: req.body.description,
            }, {where:{ id: req.body.id}},{transaction: t});
            let sal = await Sals.update({
                salary: req.body.salaries[0].salary,
                bonusRate: req.body.salaries[0].bonusRate,
                total: req.body.salaries[0].total
            }, {where:{ id: req.body.salaries[0].id}}, {transaction: t});

            let us = await User.update({
                firstName: req.body.users[0].firstName,
                lastName: req.body.users[0].lastName,
            }, {where:{ id: req.body.users[0].id}}, {transaction: t});
            await t.commit()
            return res.json({
                data: work, sal, us
            })
        } catch (err) {
            await t.rollback();
            return res.json({
                exception: err.message
            })
        }
    }
}

module.exports = UserController