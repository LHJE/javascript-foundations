class Werewolf {
	constructor(name) {
		this.name = name;
		this.human = true;
		this.wolf = false;
	}

	transform(){
		this.human = false;
		this.wolf = true;
	}
}

module.exports = Werewolf;
