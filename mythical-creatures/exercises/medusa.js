class Medusa {
	constructor(name) {
		this.name = name;
	}

	stare(person){
		person.stoned = true;
	}
}

module.exports = Medusa;
