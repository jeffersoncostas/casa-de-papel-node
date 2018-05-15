let bandits = [
    {_id:1, nome:'Professor'},
    {_id:2, nome:'Rio'}
];

module.exports.getbandits = function(req,res){
    res.json(bandits);
}