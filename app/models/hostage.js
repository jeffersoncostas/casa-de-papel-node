let mongoose = require('mongoose');

module.exports = function(){
    let schema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        bandit: {
            type: mongoose.Schema.ObjectId,
            ref: 'Bandit'
        }
    })
    return mongoose.model('Hostage', schema);
}();