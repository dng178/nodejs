function logUrl(req, res, next) {
    console.log(req.originalUrl.slice(1).split("/",1).toString())
    return next()
}

function logUser(req, res, next){
    console.log("user")
    return next()
}

function logWork(req, res, next){
    console.log("work")
    return next()
}

function logDept(req, res, next){
    console.log("Department")
    return next()
}

function logSal(req, res, next){
    console.log("salaries")
    return next()
}

function logEvent(req, res, next){
    console.log("event")
    return next()
}

module.exports = {
    logUrl: logUrl,
    // logUser: logUser,
    // logWork: logWork,
    // logDept: logDept,
    // logSal: logSal,
    // logEvent: logEvent
}