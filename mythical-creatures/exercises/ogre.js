class Orge {
	constructor(name, home = 'Swamp') {
		this.name = name;
		this.home = home;
		this.swings = 0;
	}

	encounter(human){
		human.encounterCounter++;
		if (human.noticesOgre()) {
			this.swingAt(human);
		};
		if (this.swings > 1) {
			human.knockedOut = true;
		}
	}

	swingAt(human){
		this.swings++;
	}
}

module.exports = Orge;
