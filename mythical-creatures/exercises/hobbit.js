class Hobbit {
	constructor(name, age = 0) {
		this.name = name;
		this.age = age
	}

	celebrateBirthday(){
		this.age += 1
	}

}
module.exports = Hobbit;
