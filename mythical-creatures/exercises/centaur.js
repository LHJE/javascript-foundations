class Centaur {
	constructor(data) {
		this.name = data.name;
		this.breed = data.type;
		this.cranky = false;
		this.standing = true;
		this.actions = 0;
	}

	shoot(){
		this.actions += 1;
		this.crankyCheck();
		return 'Twang!!!';
	}

	run(){
		this.actions += 1;
		this.crankyCheck();
		return 'Clop clop clop clop!!!';
	}

	crankyCheck(){
		if (this.actions >= 3) {
			this.cranky = true
		}
	}
}
module.exports = Centaur;
