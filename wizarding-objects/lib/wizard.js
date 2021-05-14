class Wizard {
	constructor(data) {
		this.name = data['name'];
		this.pets = [];
		this.petsCount = 0;
	}

	adoptPet(pet){
		this.pets.push(pet);
		this.petsCount++;
	}
}

module.exports = Wizard;
