const express = require("express");

const app = express();

// const Actor = require('./Actors');

// const mongoose = require('mongoose');

// mongoose.connect("mongodb://127.0.0.1:27017/estm");

// const db = mongoose.connection;

// db.once('open', () => {
//     console.log("connecté!!!");
// });

// let myQuery = Actor.find();

// myQuery.exec((error, data) => {
//     if (data) console.log(`${data}`);
// })

// Actor.create({
//     name: "stone",
//     email: "stone@gmail.com"
// }, (error, savedDocument) => {
//     if (error) console.log(error);
//     console.log(savedDocument);
// });

// app.get("/actors", (req, res) => {
//     Actor.find({}, (error, actors) => {
//         if (error) throw error;
//         res.json(actors);
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

app.get("/", homeController.showHome);

app.get("/courses", homeController.showCourses);

app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);

// app.get("/contact", fansController.getFanPage);

// app.post("/contact", fansController.saveFan);

// app.get("/fans", fansController.getAllFans, (req, res, next) => {
//     res.render("fans", { fans: req.data });
// });



app.use(errorController.pageNotFoundError);

app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});