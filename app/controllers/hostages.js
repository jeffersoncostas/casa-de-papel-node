let Hostage = require('../models/hostage');

module.exports.getHostages = function(req,res){
    let promise = Hostage.find().populate('bandit');
    if(req.query.min_age){
        let min_age = req.query.min_age;
        promise = promise.find({age : {'$gte':min_age}});
    }
    if(req.query.max_age){
        let max_age = req.query.max_age;
        promise = promise.find({age : {'$lte': max_age}});
    }    
    promise.then(
        function(hostages){
            res.json(hostages);
        }
    ).catch(
        function(error){
            res.status(500).end();
        }
    );
}

module.exports.getHostageById = function(req, res){
    let id = req.params.id;
    let promise = Hostage.findById(id);
    promise.then(
        function(hostage){
            res.json(hostage);
        }
    ).catch(
        function(error){
            res.status(404).send('Nao existe');
        }
    )
}

module.exports.insertHostage = function(req, res){
    let promise = Hostage.create(req.body);
    promise.then(
        function(hostage){
            console.log(hostage);
            res.status(201).json(hostage);
        }
    ).catch(
        function(e){
            res.status(500).end();
        }
    );
}