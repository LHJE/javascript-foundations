class Hobbit {
	constructor(name, age = 0) {
		this.name = name;
		this.age = age;
		this.adult = false;
	}

	celebrateBirthday(){
		this.age += 1
		if(this.age >= 33) {
			this.adult = true;
		}
	}

}
module.exports = Hobbit;
