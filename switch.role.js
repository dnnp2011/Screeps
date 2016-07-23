module.exports = {
    run: function (creep) {
        //Role Switching Code
        //Set default values
        let desiredHarvesters = 4;
        let desiredUpgraders = 6;
        let desiredTotal = 10;
        let desiredEnergy = 200;
        let currentHarvesters = _.sum(Game.creeps, (c) => c.memory.role == 'Harvester');
        let currentUpgraders = _.sum(Game.creeps, (c) => c.memory.role == 'Upgrader');
        let currentTotal = _.sum(Game.creeps, (c) => c.memory.role != undefined);
        //If the total number of creeps is >= the number I want, AND the spawn is full of energy -->
        if (currentTotal >= desiredTotal && Game.spawns.Spawn1.energy == Game.spawns.Spawn1.energyCapacity) {
            //For each creep[x] in the game -->
            for (let x in Game.creeps) {
                //Let creep2 be this creep[x] -->
                let creep2 = Game.creeps[x];
                //If the current creep is a harvester -->
                if (creep2.memory.role == 'Harvester') {
                    //Change the role of this creep to upgrader.
                    creep2.memory.role = 'Upgrader';
                }
            }
        }
        //Otherwise, If the current number of creeps is less than I want, OR the spawn is not maxed out on energy -->
        else if (currentTotal < desiredTotal || Game.spawns.Spawn1.energy < Game.spawns.Spawn1.energyCapacity) {
            //For each creep[x] in the game -->
            for (let x in Game.creeps) {
                //Let creep2 be this creep[x] -->
                let creep2 = Game.creeps[x];
                //If the number of upgraders is greater than I want, AND the current role of this creep is Upgrader -->
                if (currentUpgraders > desiredUpgraders && creep2.memory.role == 'Upgrader') {
                    //Change the role of this creep to harvester.
                    creep2.memory.role = 'Harvester';
                }
            }
        }
    }
}