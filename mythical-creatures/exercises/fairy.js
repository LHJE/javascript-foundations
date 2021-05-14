class Fairy {
	constructor(name) {
		this.name = name;
		this.dust = 10;
		this.clothes = {dresses: ['Iris']};
		this.disposition = 'Good natured';
	}

	receiveBelief(){
		this.dust += 1;
	}

	believe(){
		this.dust += 10;
	}

	makeDresses(flowers){
    this.clothes.dresses = this.clothes.dresses.concat(flowers);
	}
}

module.exports = Fairy;
