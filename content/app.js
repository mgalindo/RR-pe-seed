// Scaffolding entry-point for ProjEvo-Core applications
// To use as is, place this file into your content/ directory.
var pec = require('projevo-core'),
    path = require('path'),
    config = require('config');

var main = new pec.Main(path.join(__dirname, '..'), config);

var eventBus = pec.EventBus;
var log = pec.Logger.getLogger();

eventBus.on("systemStart", function(data){
    log.info(path.join(path.join(__dirname, '..'), config.paths.providers));
});


// This path should point to the root of the application
main.start();

