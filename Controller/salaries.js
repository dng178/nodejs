const Sals = require("../Models/salaries")
const Work = require("../Models/work")

class SalController {
    constructor() {
    }
    //get all Sal
    async get(req, res) {
        try {
            let sal = await Sals.findAll({});
            return res.json({
                data: sal
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
            let sal = await Sals.create({
                salary: req.body.salary,
                bonusRate: req.body.bonusRate,
            });
            return res.json({
                data: sal
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
            let sal = await Sals.update({
                    salary: req.body.salary,
                    bonusRate: req.body.bonusRate,
                }, {
                    where: {
                        id: req.body.id
                    }
                }
            );
            return res.json({
                data: sal
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
            let sal = await Sals.destroy({
                    where: {
                        id: req.body.id
                    }
                }
            );
            return res.json({
                data: sal
            })
        } catch (err) {
            return res.json({
                exception: err.message
            })
        }
    }

    //get all Sal + work
    async getsw(req, res) {
        try {
            let sal = await Sals.findAll({
                attributes: ['salary', 'bonusRate'],
                include: [
                    {
                        model: Work,
                        attributes: ['id', 'name', 'type', 'description'],
                        through: {
                            attributes: ['salId', 'workId'],
                        },
                        required: true,
                    }
                ]
            });
            return res.json({
                data: sal
            })
        } catch (err) {
            return res.json({
                exception: err.message
            })
        }
    }
}

module.exports = SalController