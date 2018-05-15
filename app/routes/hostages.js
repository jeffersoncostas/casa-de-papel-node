let hostage_controller = require('../controllers/hostages')

module.exports = function(app){
    app.get('/api/hostages', hostage_controller.getHostages);
    app.get('/api/hostages/:id', hostage_controller.getHostageById);
    app.post('/api/hostages', hostage_controller.insertHostage)
}