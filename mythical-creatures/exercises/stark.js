class Stark {
	constructor(name, location = 'Winterfell') {
		this.name = name;
		this.location = location;
		this.safe = false;
	}

	houseWords(){
		return 'Winter is Coming';
	}
}

module.exports = Stark;
