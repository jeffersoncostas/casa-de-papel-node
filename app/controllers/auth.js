let Bandit = require('../models/bandit')
let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')

module.exports.signin = function(req, res){
    let promise = Bandit.findOne({email: req.body.email}).exec();
    promise.then(
        function(bandit){
            if(bcrypt.compareSync(req.body.password, bandit.password)){
                let token = jwt.sign({id: bandit._id}, 'minha_senha_secreta');
                console.log(token);              
                res.status(200).json({
                    id: bandit._id,
                    token: token,
                    message: 'Logado!'
                });
            }else{
                res.status(401).send('Login inválido1')
            }
        }
    ).catch(
        function(){
            res.status(401).send('Login inválido2')            
        }
    )
}


module.exports.verifyToken = function(req, res, next){
    jwt.verify(req.query.token, 'minha_senha_secreta', 
        function(err, decoded){
            if(err){
                res.status(401).json({
                    message: "Not authorized"
                })
            }else{
                next()
            }
        }
    )
}