var roleharvest = require('role.harvest');
var roleupgrade = require('role.upgrade');
var rolebuilder = require('role.builder');
var maintcreeps = require('maint.creeps');

module.exports.loop = function () {
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleharvest.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleupgrade.run(creep);
        }
        if(creep.memory.role == 'builder'){
            rolebuilder.run(creep);
        }
    }
    //Begin Maint Creeps Checks
    maintcreeps.run();
    maintcreeps.setMemory();
}
