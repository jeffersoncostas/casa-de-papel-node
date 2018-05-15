let express = require('express');
let hostage_routes = require('../app/routes/hostages')
let bandit_routes = require('../app/routes/bandits')

module.exports = function(){
    let app = express();
    app.set('port', 3000);
    app.use(express.static('./public'));
    hostage_routes(app);
    bandit_routes(app);

    return app;
}

