module.exports = {
	run: function (creep) {
		//Harvester Work Orders
		//If this creep is a harvester -->
		if (creep.memory.role == 'Harvester') {
			//If this creep is also currently working, AND it is carrying NO energy -->
			if (creep.memory.working == true && creep.carry.energy == 0) {
				//Set working for this creep to FALSE.
				creep.memory.working = false;
			}
			//Or, If this creep is NOT currently working, AND it is FULL of energy -->
			else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
				//Set working for this creep to TRUE.
				creep.memory.working = true;
			}
			//Or, If this creep is currently working, AND is carrying energy -->
			else if (creep.memory.working) {
				//Try to transfer energy to the spawn, If not in range of spawn -->
				if (creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
					//Move closer to spawn.
					creep.moveTo(Game.spawns.Spawn1);
				}
			}
			//Otherwise -->
			else {
				//Find path to the nearest energy source and set it as [source] -->
				var source = creep.pos.findClosestByPath(FIND_SOURCES);
				//Try to harvest the energy source, If not in range of that source -->
				if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
					//Move closer to energy source.
					creep.moveTo(source);
				}
			}
		}
	}
};
