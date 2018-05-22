let bandits_controller = require('../controllers/bandits')

module.exports = function(app){
    app.post('/api/bandits', bandits_controller.insertBandit);    
    app.get('/api/bandits', bandits_controller.getBandits);
    app.get('/api/bandits/:id/hostages', bandits_controller.getHostagesFromBanditId);
}