class Medusa {
	constructor(name) {
		this.name = name;
		this.statues = [];
	}

	stare(person){
		person.stoned = true;
		this.statues.push(person)
	}
}

module.exports = Medusa;
