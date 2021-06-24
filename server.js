const express = require('express');
const app = express();
const Works = require("./Models/work");
const Users = require("./Models/user");
const Dept = require("./Models/dept");
const UserDept = require("./Models/UserDept");
app.listen('3000', ()=>{
    console.log("SERVER START ON PORT 3000")
    app.get('/',(req, res)=> {
        // res.send("Hello world~");
        Users.findAndCountAll({
            include:[
                {
                   model:Dept,
                    // required:true,
                }
            ],
            order:[
                [{model: Dept}, 'id', 'ASC' ],

            ],
        }).then((user) => {
            return res.json({
                status: true,
                data: user
            })
        }).catch((err) => {
            if (err) {
                console.log(err);
            }
        });
    })

    //get all users
    app.get('/users', (req, res) => {
        Users.findAndCountAll({
            where:{},
            include:[
                {
                    all: true,
                    // model: works,
                    required:true,
                }
            ]
        }).then((user) => {
            return res.json({
                status: true,
                data: user
            })
        }).catch((err) => {
            if (err) {
                console.log(err);
            }
        });
    });

    //user create
    app.post('/users/create', (req, res) => {
        Users.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            workId: req.body.workId,
            // deptId: req.body.deptId,
        }).then(result => {
            return res.json({
                status: true,
                data: result
            })

        }).catch((err)=>{
            if(err){
                console.log(err);
            }
        });
    });
    //update user
    app.put('/users/update', (req, res) => {
        // const id = req.params.id;
        Users.update({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                workId: req.body.workId,
                // deptId: req.body.deptId,
            }, {where:{
                    id: req.body.id }
            }
        ).then(result => {
            return res.json({
                status: true,
                data: result
            })
        }).catch((err)=>{
            if(err){
                console.log(err);
            }
        });
    });

    //user delete
    app.delete('/users/delete', (req, res) => {
        // const id = req.params.id;
        Users.destroy({where:{
                    id: req.body.id }
            }
        ).then(result => {
            res.send("Delete successful" );
        }).catch((err)=>{
            if(err){
                console.log(err);
            }
        });
    });

    //get all users
    app.get('/works', (req, res) => {
        Works.findAndCountAll({
            where:{},
            include:[
                {
                    all: true,
                }
            ]
        }).then((work) => {
            return res.json({
                status: true,
                data: work
            })
        }).catch((err) => {
            if (err) {
                console.log(err);
            }
        });
    });

    //work create
    app.post('/works/create', (req, res) => {
        Works.create({
            name: 'Net Security',
            type: 'IA',
            description: "KKKKKK",
        }).then(result => {
            return res.json({
                status: true,
                data: result
            })
            // console.log("Create successful");
        }).catch((err)=>{
            if(err){
                console.log(err);
            }
        });
    });
    //work update
    app.put('/works/update', (req, res) => {
        // const id = req.params.id;
        Works.update({
                name: req.body.name,
                type: req.body.type,
                description: req.body.description,
            }, {where:{
                    id: req.body.id }
            }
        ).then(result => {
            console.log("Update successful" );
            return res.json({
                status: true,
                data: result
            })
        }).catch((err)=>{
            if(err){
                console.log(err);
            }
        });
    });

    //work delete
    app.delete('/works/delete', (req, res) => {
        // const id = req.params.id;
        Works.destroy({where:{
                    id: req.body.id }
            }
        ).then(result => {
            res.send("Delete successful")
            console.log("Delete successful" );
        }).catch((err)=>{
            if(err){
                console.log(err);
            }
        });
    });

    //dept create
    app.post('/dept/create', (req, res) => {
        Dept.create({
            name: req.body.name,
            type: req.body.type,
            description: req.body.description,

        }).then(result => {
            res.end("Create successful");
            return res.json({
                status: true,
                data: result
            })
        }).catch((err)=>{
            if(err){
                console.log(err);
            }
        });
    });

    //Dept update
    app.put('/dept/update', (req, res) => {
        // const id = req.params.id;
        Dept.update({
                name: req.body.name,
                type: req.body.type,
                description: req.body.description,

            }, {where:{
                    id: req.body.id }
            }
        ).then(result => {
            console.log("Update successful" );
            return res.json({
                status: true,
                data: result
            })
        }).catch((err)=>{
            if(err){
                console.log(err);
            }
        });
    });

    //work delete
    app.delete('/dept/delete', (req, res) => {
        // const id = req.params.id;
        Dept.destroy({where:{
                    id: req.body.id }
            }
        ).then(result => {
            res.send("Delete successful")
        }).catch((err)=>{
            if(err){
                console.log(err);
            }
        });
    });

    //get all dept and user
    app.get('/ud', (req, res) => {
        Users.findAll({
            attributes: ['firstName', 'lastName', 'workId'],
            include:[
                {

                    required:true,
                    right: true,
                    model: Dept,
                    attributes: ['name','type','description'],
                    through:{
                        attributes: [],
                    },
                    // all: true,
                    // nested: true,
                }
            ]
        }).then((user) => {
            return res.json({
                status: true,
                data: user
            })
        }).catch((err) => {
            if (err) {
                console.log(err);
            }
        });
    });
});
