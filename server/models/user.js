const mongoose = require("mongoose");

let User = mongoose.model("Users", {
    email: {
        required: true,
        trim: true,
        type: String,
        minlength: 1
    }
});

module.exports = {User};