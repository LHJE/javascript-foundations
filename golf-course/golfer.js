class Golfer {
	constructor(data) {
		this.name = data['name'];
		this.handicap = data['handicap'];
		this.frustration = 0;
	}

	calculateAvg(par){
		return `I usually shoot a ${par + this.handicap} on average.`
	}

	playRound(golfCourse){
		if (golfCourse.difficulty === 'hard') {
			this.frustration += 500
		} else {
			this.frustration += 100
		}
	}
}
module.exports = Golfer;
