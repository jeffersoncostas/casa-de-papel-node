let hostage_controller = require('../controllers/hostages');
let auth_controller = require('../controllers/auth');

module.exports = function(app){
    app.use('/api/hostages', auth_controller.verifyToken)
    app.get('/api/hostages', hostage_controller.getHostages);
    app.get('/api/hostages/:id', hostage_controller.getHostageById);
    app.post('/api/hostages', hostage_controller.insertHostage)
}