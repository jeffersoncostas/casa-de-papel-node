let hostages = [
    {_id: 1, nome:'Arturito'},
    {_id: 2, nome:'Alison'}
]

module.exports.getHostages = function(req,res){
    res.json(hostages);
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
