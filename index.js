const express = require('express');
const app = express();
const works = require("./Models/work")


// // works.sync({ force: true }).then((works) => {
// //     return works.create({
// //         name: 'Hacker',
// //         type: 'IT',
// //         description: "HHHHH",
// //     }).then(result=>{
// //         console.log("TAERQWRQW")
// //     });
// // });
// // console.log("GGG");
//
// // works.create({
// //     name: "dev",
// //     type: "IT",
// //     description: "AAAAA",
// // }).then(result => {
// //     works.findAll({}).then((work) => {
// //         console.log("All users:", JSON.stringify(work, null, 4));
// //     }).catch((err) => {
// //         if (err) {
// //             console.log(err);
// //         }
// //     });
// //
// // }).catch((err) => {
// //     if (err) {
// //         console.log(err);
// //     }
// // });
//
// works.update({ name: "Test" }, {
//     where: {
//         name: "Hacker"
//     }
// }).then(() => {
//     console.log("Updating done");
// });

app.listen('3000', ()=>{
    console.log("SERVER START ON PORT 3000")
    app.get('/select', (req, res) => {
        works.findAll({}).then((work) => {
            res.send(work);
        }).catch((err) => {
            if (err) {
                console.log(err);
            }
        });
    });
});

