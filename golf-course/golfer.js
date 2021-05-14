class Golfer {
	constructor(data) {
		this.name = data['name'];
		this.handicap = data['handicap'];
		this.frustration = 0;
	}

	calculateAvg(par){
		return `I usually shoot a ${par + this.handicap} on average.`
	}
}
module.exports = Golfer;
