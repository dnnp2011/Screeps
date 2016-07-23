var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var spawnCode = require('spawn.code');
var switchRole = require('switch.role');

module.exports.loop = function () {
    //Flush Memory
    for (let name in Memory.creeps) {
        if (Game.creeps[name] == undefined) {
            delete Memory.creeps[name];
        }
    }
    //Run Appropriate Role Script
    for (var name in Game.creeps) {
        var creep = Game.creeps[name];

        if (creep.memory.role == 'Harvester') {
            roleHarvester.run(creep);
        }
        else if (creep.memory.role == 'Upgrader') {
            roleUpgrader.run(creep);
        }

    }
    spawnCode.run(creep);
    switchRole.run(creep);

    //Test function
    var checkNumberOfCreeps = function () {
        console.log(_.sum(Game.creeps, (c) => c.memory.role != undefined));
    }
}