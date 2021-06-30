const Work = require("../Models/work")
const User = require("../Models/user")
const sequelize = require("../Connection/sequelize_mysql");

class WorkController {
    constructor() {
    }
    //get all works
    async get(req, res) {
        try {
            let work = await Work.findAll({});
            return res.json({
                data: work
            })
        } catch (err) {
            return res.json({
                exception: err.message
            })
        }
    }

    //add new work
    async post(req, res) {
        try {
            let work = await Work.create({
                name: req.body.name,
                type: req.body.type,
                description: req.body.description,
            });
            return res.json({
                data: work
            })
        } catch (err) {
            return res.json({
                exception: err.message
            })
        }
    }

    //update work with input id
    async put(req, res) {
        try {
            let work = await Work.update({
                    name: req.body.name,
                    type: req.body.type,
                    description: req.body.description,
                }, {
                    where: {
                        id: req.body.id
                    }
                }
            );
            return res.json({
                data: work
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
            let work = await Work.destroy({
                    where: {
                        id: req.body.id
                    }
                }
            );
            return res.json({
                data: work
            })
        } catch (err) {
            return res.json({
                exception: err.message
            })
        }
    }

    //add new work and user using promise
    async promise(req, res) {
        try {
            let work = await Work.create({
                name: req.body.name,
                type: req.body.type,
                description: req.body.description,
            }).then(work => {
                User.create({
                    firstName: req.body.users[0].firstName,
                    lastName: req.body.users[0].lastName,
                    salId: req.body.users[0].salId,
                    workId: work.id,
                })
            });return res.json({
                data: work
            })
        } catch (err) {
            return res.json({
                exception: err.message
            })
        }
    }

    //add new work and user using async
    async postAsync(req, res) {
        try {
            const t = await sequelize.transaction();
            let work = await Work.create({
                name: req.body.name,
                type: req.body.type,
                description: req.body.description,
            }, {transaction: t});
            let us = await User.create({
                firstName: req.body.users[0].firstName,
                lastName: req.body.users[0].lastName,
                workId: work.id,
            }, {transaction: t});
            await  t.commit();
            return res.json({
                data: work
            })
        } catch (err) {
            t.rollback();
            return res.json({

                exception: err.message
            })
        }
    }
}

module.exports = WorkController