class Centaur {
	constructor(data) {
		this.name = data.name;
		this.breed = data.type;
	}

	shoot(){
		return 'Twang!!!';
	}
}
module.exports = Centaur;
