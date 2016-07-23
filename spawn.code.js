module.exports = {
    run: function (creep) {
        //Spawning Code
        //Set default values
        let desiredHarvesters = 4;
        let desiredUpgraders = 6;
        let desiredTotal = 10;
        let desiredEnergy = 200;
        let currentHarvesters = _.sum(Game.creeps, (c) => c.memory.role == 'Harvester');
        let currentUpgraders = _.sum(Game.creeps, (c) => c.memory.role == 'Upgrader');
        let currentTotal = _.sum(Game.creeps, (c) => c.memory.role != undefined);

        //If the number of creeps is less than I want AND the amount of energy in the spawn is greater than the set value -->
        if (currentTotal < desiredTotal
            && Game.spawns.Spawn1.energy >= desiredEnergy) {
            //If the number of harvester creeps is less than I want -->
            if (currentHarvesters < desiredHarvesters) {
                //Set new creep = name
                let name = Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, MOVE], undefined, {role: 'Harvester', working: false});
                //If the new creep [name] is NOT < 0 (generated an error code) -->
                if (!(name < 0)) {
                    //Print the name and role of the new creep in console.
                    console.log("A new creep named: " + name + " was spawned as a: " + Game.creeps[name].memory.role);
                }
            }
            //If the number of upgraders is less than I want -->
            else if (currentUpgraders < desiredUpgraders) {
                //Set new creep = name
                let name = Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, MOVE], undefined, {role: 'Upgrader', working: false});
                //If the new creep [name] is NOT < 0 (generated an error code) -->
                if (!(name < 0)) {
                    //Print the name and role of the new creep in console.
                    console.log("A new creep named: " + name + " was spawned as a: " + Game.creeps[name].memory.role);
                }
            }
        }
    }
}