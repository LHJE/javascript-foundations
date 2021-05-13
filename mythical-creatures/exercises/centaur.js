class Centaur {
	constructor(data) {
		this.name = data.name;
		this.breed = data.type;
		this.cranky = false;
		this.standing = true;
	}

	shoot(){
		return 'Twang!!!';
	}

	run(){
		return 'Clop clop clop clop!!!';
	}
}
module.exports = Centaur;
