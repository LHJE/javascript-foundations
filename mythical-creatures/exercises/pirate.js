class Pirate {
	constructor(name, job = "scallywag") {
		this.name = name;
		this.job = job;
		this.cursed = false;
	}

	robShip(){
		return 'YAARRR!'
	}
}

module.exports = Pirate;
