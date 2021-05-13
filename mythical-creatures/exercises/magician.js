class Magician {
	constructor(data) {
		this.name = data.name;
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
		return 'PULL RABBIT FROM TOP HAT'
	}
}

module.exports = Magician;
