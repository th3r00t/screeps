var roleharvest = require('role.harvest');
var roleupgrade = require('role.upgrade');
Game.creeps['Harvester1'].memory.role = 'harvester';
Game.creeps['Harvester2'].memory.role = 'upgrader';
Game.creeps['Upgrader1'].memory.role = 'upgrader';
module.exports.loop = function () {
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleharvest.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleupgrade.run(creep);
        }
    }
}
