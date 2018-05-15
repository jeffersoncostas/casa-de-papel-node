let bandits_controller = require('../controllers/bandits')

module.exports = function(app){
    app.get('/bandits', bandits_controller.getbandits);
}