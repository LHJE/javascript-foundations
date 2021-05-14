class Orge {
	constructor(name, home = 'Swamp') {
		this.name = name;
		this.home = home;
	}

	encounter(human){
		human.encounterCounter += 1;
	}
}

module.exports = Orge;
