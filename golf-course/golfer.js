class Golfer {
	constructor(data) {
		this.name = data['name'];
		this.handicap = data['handicap'];
		this.frustration = 0;
		this.confidence = 0;
	}

	calculateAvg(par){
		return `I usually shoot a ${par + this.handicap} on average.`;
	}

	playRound(golfCourse){
		if (golfCourse.difficulty === 'hard') {
			this.frustration += 500;
		} else {
			this.frustration += 100;
		}
	}

	hitTheRange(){
		this.confidence += 10;
	}

	marvel(golfCourse){
		var features = ''
		for (var i = 0; i < golfCourse.features.length; i++) {
			features += " and " + golfCourse.features[i];
		}
		return `I love the ${features.slice(5)} on this course!`
	}

	whatYaShoot(shots){
		if (shots > 0) {
			this.frustration += 20;
			return 'Doh!';
		} else if (shots === 0) {
			this.frustration -= 10;
			return 'Booyah!';
		} else if (shots < 0) {
			this.frustration = 0;
			return 'I AM THE GREATEST GOLFER ALIVE!';
		}
	}
}
module.exports = Golfer;
