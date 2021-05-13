class Pirate {
	constructor(name, job = "scallywag") {
		this.name = name;
		this.job = job;
		this.cursed = false;
		this.booty = 0;
	}

	robShip(){
		return 'YAARRR!'
	}
}

module.exports = Pirate;
