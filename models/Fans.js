const mongoose = require("mongoose");

const fanSchema = mongoose.Schema({
    name: String,
    email: String
});

module.exports = mongoose.model("Fan", fanSchema);