var maintcreeps = {
    run: function(creep){
        var c_count = 0   
        for (i in Game.creeps){
            c_count++
        }
        if(c_count == 0)  {var init = true}
        if (init == true || c_count < 6){
            var creep_num = c_count + 1;
            if(c_count < 2 || c_count == null){
                Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Harvester'+creep_num );
                Game.creeps['Harvester'+creep_num].memory.role = 'harvester'
            }
            else if (c_count >= 2 && c_count < 4){
                Game.spawns['Spawn1'].spawnCreep( [WORK,CARRY,MOVE], 'Upgrader'+creep_num);
                Game.creeps['Upgrader'+creep_num].memory.role = 'upgrader'
            }
            else if (c_count >= 4){
                Game.spawns['Spawn1'].spawnCreep( [WORK,CARRY,MOVE,MOVE], 'Builder'+creep_num);
                Game.creeps['Builder'+creep_num].memory.role = 'builder'
            }
        }
        else{/*All creeps spawned*/}
    },
    check: function(){console.log('running check function');
    }
};
module.exports = maintcreeps;