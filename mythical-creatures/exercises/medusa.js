class Medusa {
	constructor(name) {
		this.name = name;
		this.statues = [];
	}

	stare(person){
		person.stoned = true;
	}
}

module.exports = Medusa;
