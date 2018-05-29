let bandits_controller = require('../controllers/bandits')
let auth_controller = require('../controllers/auth')

module.exports = function(app){
    app.post('/api/bandits/signin', auth_controller.signin);
    app.post('/api/bandits', bandits_controller.insertBandit);    
    app.use('/api/bandits', auth_controller.verifyToken);
    app.get('/api/bandits', bandits_controller.getBandits);
    app.get('/api/bandits/:id/hostages', bandits_controller.getHostagesFromBanditId);
}