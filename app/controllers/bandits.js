let bcrypt = require('bcrypt');

let Bandit = require('../models/bandit');
let Hostage = require('../models/hostage');

module.exports.getBandits = function(req,res){
    let promise = Bandit.find().populate('hostages').exec();
    promise.then(
        function (bandits) {
            res.json(bandits);
        }
    ).catch(
        function(){
            res.status(404).send('Nao ecxiste');
        }
    )
}

module.exports.insertBandit = function(req, res){
    console.log(req.body);
    let bandit = new Bandit({
        real_name: req.body.real_name,
        fake_name: req.body.fake_name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    });
    let promise = Bandit.create(bandit);
    promise.then(
        function(bandit){
            res.status(201).json({
                id: bandit._id,
                real_name: bandit.real_name,
                fake_name: bandit.fake_name,
                email: bandit.email
            });
        }
    ).catch(
        function(error){
            res.status(404).send('Non Ecxiste');
        }
    )
}

module.exports.getHostagesFromBanditId = function(req, res){
    let id = req.params.id;
    let promise = Bandit.findById(id);
    function error(req, res){
        res.status(500).send();
    }
    promise.then(
        function(bandit){
            let promise1 = Hostage.find({'bandit': bandit._id});
            promise1.then(
                function(hostages){
                    res.json(hostages);
                }
            ).catch(error);
        }
    ).catch(error);
}