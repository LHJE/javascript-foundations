class Magician {
	constructor(data) {
		this.name = data.name;
		this.confident = false;
		if(data.topHat === undefined ){
			this.topHat = true;
		} else {
			this.topHat = data.topHat;
		}
	}

	incantation(spell){
		return spell.toUpperCase() + "!"
	}

	cast(){
		if(this.topHat){
			return 'PULL RABBIT FROM TOP HAT'
		} else {
			return 'PULL DOVE FROM SLEEVE'
		}
	}
}

module.exports = Magician;
