const UserController = require("./Controller/user")
const Workcontroller = require("./Controller/work")
const DeptController = require("./Controller/department")
const SalController = require("./Controller/salaries")
const EventController = require("./Controller/event")

let userController = new UserController()
let workController = new Workcontroller()
let deptController = new DeptController()
let salController = new SalController()
let evController = new EventController()

let urlMiddleware = require("./Middleware/url")

function setRoute(app) {

    app.use("*", urlMiddleware.logUrl)

    //User
    app.get("/user", function (req, res) {
        userController.get(req, res)
    })
    app.get("/user/sal", function (req, res){
        userController.getS(req, res)
    })
    app.post("/user/create", function (req, res) {
        userController.post(req, res)
    })
    app.put("/user/update", function (req, res) {
        userController.put(req, res)
    })
    app.delete("/user/delete", function (req, res) {
        userController.delete(req, res)
    })
    app.post("/user/wsu/create", function (req, res) {
        userController.createThree(req, res)
    })
    app.put("/user/wsu/update", function (req, res) {
        userController.updateThree(req, res)
    })


    //Work
    app.get("/work", function (req, res) {
        workController.get(req, res)
    })
    app.post("/work/create", function (req, res) {
        workController.post(req, res)
    })
    app.put("/work/update", function (req, res) {
        workController.put(req, res)
    })
    app.delete("/work/delete", function (req, res) {
        workController.delete(req, res)
    })
    app.post("/work/promise", function (req, res) {
        workController.promise(req, res)
    })
    app.post("/work/async", function (req, res) {
        workController.postAsync(req, res)
    })

    //Department
    app.get("/dept", function (req, res) {
        deptController.get(req, res)
    })
    app.post("/dept/create", function (req, res) {
        deptController.post(req, res)
    })
    app.put("/dept/update", function (req, res) {
        deptController.put(req, res)
    })
    app.delete("/dept/delete", function (req, res) {
        deptController.delete(req, res)
    })

    //Salaries
    app.get("/sal", function (req, res) {
        salController.get(req, res)
    })
    app.post("/sal/create", function (req, res) {
        salController.post(req, res)
    })
    app.put("/sal/update", function (req, res) {
        salController.put(req, res)
    })
    app.delete("/sal/delete", function (req, res) {
        salController.delete(req, res)
    })
    app.get("/sal/sw", function (req, res) {
        salController.getsw(req, res)
    })

    //Event
    app.get("/ev", function (req, res) {
        evController.get(req, res)
    })
    app.post("/ev/create", function (req, res) {
        evController.post(req, res)
    })
    app.put("/ev/update", function (req, res) {
        evController.put(req, res)
    })
    app.delete("/ev/delete", function (req, res) {
        evController.delete(req, res)
    })
    app.get("/ev/eu", function (req, res) {
        evController.geteu(req, res)
    })
    //
}

module.exports = setRoute