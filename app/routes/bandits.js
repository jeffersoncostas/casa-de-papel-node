let bandits_controller = require('../controllers/bandits')

module.exports = function(app){
    app.get('/api/bandits', bandits_controller.getbandits);
}