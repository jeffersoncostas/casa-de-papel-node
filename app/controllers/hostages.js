let hostages = [
    {_id: 1, nome:'Arturito'},
    {_id: 2, nome:'Alison'}
]

module.exports.getHostages = function(req,res){
    if(req.query.min_id){
        let list = hostages.filter((el)=>(el._id>=req.query.min_id));
        res.json(list);
    }else{
        res.json(hostages);
    }
}

module.exports.getHostageById = function(req, res){
    let id = req.params.id;
    let hostage = hostages.find((e)=>(e._id==id));
    if(hostage){
        res.json(hostage);
    }else{
        res.status(404).send('Hostage not found');
    }
}

module.exports.insertHostage = function(req, res){
    hostages.push(req.body);
    res.status(200).send(req.body);
}