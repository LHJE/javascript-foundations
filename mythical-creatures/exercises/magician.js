class Magician {
	constructor(data) {
		this.name = data.name;
		if(data.topHat === undefined ){
			this.topHat = true;
		} else {
			this.topHat = data.topHat;
		}
	}
}

module.exports = Magician;
