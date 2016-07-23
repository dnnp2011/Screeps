module.exports = {
	run: function (creep) {
		//Upgrader Work Orders
		//If this creep is an upgrader -->
		if (creep.memory.role == 'Upgrader') {
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
				//Try to upgrade the controller, If not in range of controller -->
				if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE)
				//Move closer to controller.
					creep.moveTo(creep.room.controller);
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