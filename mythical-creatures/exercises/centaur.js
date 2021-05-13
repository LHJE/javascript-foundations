class Centaur {
	constructor(data) {
		this.name = data.name;
		this.breed = data.type;
		this.cranky = false;
		this.standing = true;
		this.layingDown = false;
		this.actions = 0;
	}

	shoot(){
		this.actions += 1;
		this.crankyCheck();
		return this.react('Twang!!!');
	}

	run(){
		this.actions += 1;
		this.crankyCheck();
		return this.react('Clop clop clop clop!!!');
	}

	react(reaction){
		if (this.cranky || this.layingDown) {
			return 'NO!';
		} else {
			return reaction;
		};
	}

	sleep(){
		if (this.layingDown) {
			this.cranky = false;
			this.actions = 0
			return 'ZZZZ';
		} else {
			return 'NO!';
		};
	}

	layDown(){
		this.standing = false;
		this.layingDown = true;
	}

	standUp(){
		this.standing = true;
		this.layingDown = false;
	}

	crankyCheck(){
		if (this.actions >= 3) {
			this.cranky = true;
		};
	}
}
module.exports = Centaur;
