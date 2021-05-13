class Magician {
	constructor(data) {
		this.name = data.name;
		this.confident = false;
		this.spellsCast = 0;
		if(data.topHat === undefined ){
			this.topHat = true;
		} else {
			this.topHat = data.topHat;
		};
	}

	incantation(spell){
		return spell.toUpperCase() + "!";
	}

	cast(){
		this.spellsCast += 1;
		if(this.spellsCast >= 3){
			this.confident = true
		};
		if(this.topHat){
			return 'PULL RABBIT FROM TOP HAT'
		} else {
			return 'PULL DOVE FROM SLEEVE'
		};
	}

}

module.exports = Magician;
