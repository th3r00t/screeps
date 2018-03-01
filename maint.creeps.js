var maintcreeps = {


    run: function(creep){
        var c_count =  Game.creeps.length;
        if (c_count < 3 && Game.energy > 200){

        }
    },
    check: function(){
        console.log('running check function');
    }
};
module.exports = maintcreeps;