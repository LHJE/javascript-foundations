class Wizard {
	constructor(data) {
		this.name = data['name'];
		this.pets = [];
		this.petsCount = 0;
		this.petSentence = '';
		this.wand = null;
	}

	adoptPet(pet){
		this.pets.push(pet);
		this.petsCount++;
	}

	petList(){
		var vowels = ['a', 'e', 'i', 'o', 'u'];
		for (var i = 0; i < this.pets.length; i++) {
			this.sentence(vowels, i, this.pets);
		}
		return this.petSentence.slice(2) + '.';
	}

	sentence(vowels, i, pets){
		if (vowels.indexOf(pets[i].type[0].toLowerCase()) != -1) {
			this.petSentence += `; An ${pets[i].type} named ${pets[i].name}`;
		} else {
			this.petSentence += `; A ${pets[i].type} named ${pets[i].name}`;
		}
	}

	getWand(wand){
		this.wand = wand;
	}

	castSpell(spell) {
		return this.wand.cast(spell);
	}

}

module.exports = Wizard;
