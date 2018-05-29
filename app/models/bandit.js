let mongoose = require('mongoose');

module.exports = function(){
    let schema = mongoose.Schema({
        real_name : {
            type: String,
            required: true
        },
        fake_name :{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    });
    return mongoose.model('Bandit', schema);
}();