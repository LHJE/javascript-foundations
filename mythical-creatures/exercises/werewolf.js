class Werewolf {
	constructor(name) {
		this.name = name;
		this.human = true;
		this.wolf = false;
		this.hungry = false;
	}

	transform(){
		if(this.human){
			this.human = false;
			this.wolf = true;
			this.hungry = true;
		} else {
			this.human = true;
			this.wolf = false;
			this.hungry = false;
		}
	}

	eat(victim){
		if (this.hungry) {
			this.transform()
			return `Yum! ${victim.name} was delicious!`

		} else {
			return 'Not Hungry'
		}
	}
}

module.exports = Werewolf;
