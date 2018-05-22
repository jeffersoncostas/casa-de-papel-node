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
    let promise = Bandit.create(req.body);
    promise.then(
        function(bandit){
            res.status(201).json(bandit);
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