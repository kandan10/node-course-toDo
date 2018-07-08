var mongoose = require('mongoose');

var user = mongoose.model('user', {
    email: {
        required: true,
        trim: true,
        type: String,
        minlength: 1
    }
});

module.exports.user = user;