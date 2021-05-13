class Magician {
	constructor(data) {
		this.confident = false;
		this.spellsCast = 0;
		if(data === undefined || data.name === undefined ){
			this.name = "Jackie Chan";
		} else {
			this.name = data.name;
		};
		if(data === undefined || data.topHat === undefined ){
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

	performShowStopper(){
		if(this.confident){
			return 'WOW! The magician totally just sawed that person in half!'
		} else {
			return 'Oh no! Practice more before attempting this trick!'
		};
	}

}

module.exports = Magician;
