let hostage_controller = require('../controllers/hostages')

module.exports = function(app){
    app.get('/hostages', hostage_controller.getHostages);
    app.get('/hostages/:id', hostage_controller.getHostageById);
}