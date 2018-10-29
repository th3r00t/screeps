var roleharvest = require('role.harvest');
var roleupgrade = require('role.upgrade');
var rolebuilder = require('role.builder');
var maintcreeps = require('maint.creeps');
var harvester_tst = RegExp(/Harvester*/)
var upgrader_tst = RegExp(/Upgrader*/)
var builder_tst = RegExp(/Builder*/)
module.exports.loop = function () {
    for(var name in Game.creeps) {
        creep = Game.creeps[name]
        if (harvester_tst.test(name)) {
            roleharvest.run(creep);
        }
        else if (upgrader_tst.test(name)) {
            roleupgrade.run(creep)
        }
        else if (builder_tst.test(name)){
            rolebuilder.run(creep);
        }
        else {console.log(name+' Still not assigned')}
    }
    //Begin Maint Creeps Checks
    maintcreeps.run();
}