const Fan = require("../models/Fans");

exports.getAllFans = (req, res, next) => {
    Fan.find({}, (error, fans) => {
        if (error) next(error);
        req.data = fans;
        next();
    });
};


exports.getFanPage = (req, res) => {
    res.render("contact");
};

exports.saveFan = (req, res) => {
    let newFan = new Fan({
        name: req.body.name,
        email: req.body.email,
    });
    newFan.save((error, result) => {
        if (error) res.send(error);
        res.render("thanks");
    });
};