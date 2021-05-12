class Hobbit {
	constructor(name, age = 0) {
		this.name = name;
		this.age = age;
		this.adult = false;
		this.old = false;
	}

	celebrateBirthday(){
		this.age += 1
		if(this.age >= 33) {
			this.adult = true;
		}
		if(this.age >= 101) {
			this.old = true;
		}
	}

}
module.exports = Hobbit;
