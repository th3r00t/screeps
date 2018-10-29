var roleharvest = require('role.harvest');
var roleupgrade = require('role.upgrade');
var rolebuilder = require('role.builder');
var maintcreeps = require('maint.creeps');
var harvester_tst = RegExp(/Harvester*/)
var upgrader_tst = RegExp(/Upgrader*/)
var builder_tst = RegExp(/Builder*/)
module.exports.loop = function () {
    for(var name in Game.creeps) {
        switch (name) {
            case harvester_tst.test(name):
                creep.memory.role == 'harvester'
                roleharvest.run(creep);
                break;
            case upgrader_tst.test(name):
                creep.memory.role == 'upgrader'
                break;
            case builder_tst.test(name):
                creep.memory.role == 'builder'
                rolebuilder.run(creep);
                break;
            default:
                console.log(name)
                break;
        }
    }
    //Begin Maint Creeps Checks
    maintcreeps.run();
    maintcreeps.setMemory();
}