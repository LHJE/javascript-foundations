class Fairy {
	constructor(name) {
		this.name = name;
		this.dust = 10;
		this.clothes = {dresses: ['Iris']};
	}

	receiveBelief(){
		this.dust += 1;
	}

	believe(){
		this.dust += 10;
	}
}

module.exports = Fairy;
