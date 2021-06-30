const Event = require("../Models/event")
const User = require("../Models/user")

class EvController {
    constructor() {
    }
    //get all Events
    async get(req, res) {
        try {
            let ev = await Event.findAll({});
            return res.json({
                data: ev
            })
        } catch (err) {
            return res.json({
                exception: err.message
            })
        }
    }

    //add new event
    async post(req, res) {
        try {
            let ev = await Event.create({
                name: req.body.name,
                detail: req.body.detail,
            });
            return res.json({
                data: ev
            })
        } catch (err) {
            return res.json({
                exception: err.message
            })
        }
    }

    //update event with input id
    async put(req, res) {
        try {
            let ev = await Event.update({
                    name: req.body.name,
                    detail: req.body.detail,
                }, {
                    where: {
                        id: req.body.id
                    }
                }
            );
            return res.json({
                data: ev
            })
        } catch (err) {
            return res.json({
                exception: err.message
            })
        }
    }

    //delete event with input id
    async delete(req, res) {
        try {
            let ev = await Event.destroy({
                    where: {
                        id: req.body.id
                    }
                }
            );
            return res.json({
                data: ev
            })
        } catch (err) {
            return res.json({
                exception: err.message
            })
        }
    }

    //get all Events and users
    async geteu(req, res) {
        try {
            let ev = await Event.findAndCountAll({
                attributes: ['name', 'detail'],
                include: [
                    {
                        model:  User,
                        attributes: ['firstName', 'lastName', 'workId'],
                        through: {
                            attributes: ['evId', 'uId'],
                        },
                        required: true,
                    }
                ]
            });
            return res.json({
                data: ev
            })
        } catch (err) {
            return res.json({
                exception: err.message
            })
        }
    }
}

module.exports = EvController