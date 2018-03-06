var maintcreeps = {
   
    run: function(creep){
        var c_count =  Game.creeps.length;
         var creep_count = 0;
        var harvesters = [];
     
        for (var name in Game.creeps){creep_count++;}
        
        if (creep_count < 6){
            var creep_num = creep_count + 1;
            if(creep_count < 2){
                Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Harvester'+creep_num );
            }
            if (creep_count > 2 && creep_count < 4){
                Game.spawns['Spawn1'].spawnCreep( [WORK,CARRY,MOVE], 'Upgrader1');
            }
            if (creep_count === 4){
                var b_num = 1;
                Game.spawns['Spawn1'].spawnCreep( [WORK,CARRY,MOVE,MOVE], 'Builder'+b_num);
            }
        }
        else{
            console.log('Found Creeps!');
        }
    },
    check: function(){
        console.log('running check function');
    },
    setMemory: function(){
        var creep_count = 0;
        for (var name in Game.creeps){creep_count++;}
        if(creep_count == 2){
            Game.creeps['Harvester'+creep_count].memory.role = 'harvester';
        }
        else if(creep_count == 3){
            Game.creeps['Upgrader1'].memory.role = 'upgrader';
        }
        else if (creep_count > 3){
            console.log('Creeps Counted > 2')
            var b_num = 1;
            b_num++;
            Game.creeps['Builder'+b_num].memory.role = 'builder';
            
            console.log(b_num);
        }
    }
};
module.exports = maintcreeps;