const express = require("express");

const app = express();

const Fan = require("./models/Fans");

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Es6");

const db = mongoose.connection;

db.once('open', () => { console.log(`Connected`); })

let myQuery = Fan.find();

myQuery.exec((error, data) => {
    if (data) console.log(`${data}`);
});

// // let fan = new Fan({
// //     name: "Zzi",
// //     email: "zzi@gmail.com"
// // });
// // fan.save((error, savedDocument) => {
// //     if (error) console.log(error);
// //     console.log(savedDocument);
// // });
// app.get("/fans", (req, res) => {
//     Fan.find({}, (error, fans) => {
//         if (error) throw error;
//         res.json(fans);
//     });
// });


const homeController = require("./controllers/homeController");

const errorController = require("./controllers/errorController");

const fansController = require("./controllers/fansController");

const layouts = require("express-ejs-layouts");

app.set("port", process.env.PORT || 5000);

app.set('view engine', 'ejs');

app.use(layouts);

app.use(express.static("public"));

app.get("/fans", fansController.getAllFans, (req, res, next) => {
    res.render("fans", { fans: req.data });
});

app.get("/", homeController.showHome);

app.get("/courses", homeController.showCourses);

app.get("/contact", fansController.getFanPage);

app.post("/contact", fansController.saveFan);

app.use(errorController.pageNotFoundError);

app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});