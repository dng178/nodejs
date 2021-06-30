const Dept = require("../Models/dept")


class deptController {
    constructor() {
    }
    //get all departments
    async get(req, res) {
        try {
            let dept = await Dept.findAll({});
            return res.json({
                data: dept
            })
        } catch (err) {
            return res.json({
                exception: err.message
            })
        }
    }

    //add new department
    async post(req, res) {
        try {
            let dept = await Dept.create({
                name: req.body.name,
                type: req.body.type,
                description: req.body.description,
            });
            return res.json({
                data: dept
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
            let dept = await Dept.update({
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
                data: dept
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
            let dept = await Dept.destroy({
                    where: {
                        id: req.body.id
                    }
                }
            );
            return res.json({
                data: dept
            })
        } catch (err) {
            return res.json({
                exception: err.message
            })
        }
    }
}

module.exports = deptController