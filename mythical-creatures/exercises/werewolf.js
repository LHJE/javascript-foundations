class Werewolf {
	constructor(name) {
		this.name = name;
		this.human = true;
	}

	transform(){
		this.human = false;
	}
}

module.exports = Werewolf;
