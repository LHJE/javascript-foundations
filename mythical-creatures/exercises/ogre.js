class Orge {
	constructor(name, home = 'Swamp') {
		this.name = name;
		this.home = home;
		this.swings = 0;
	}

	encounter(human){
		human.encounterCounter += 1;
	}

	swingAt(human){
		this.swings += 1;
	}
}

module.exports = Orge;
