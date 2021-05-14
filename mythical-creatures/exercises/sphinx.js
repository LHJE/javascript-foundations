class Sphinx {
	constructor() {
		this.riddles = [];
	}

	collectRiddle(riddle){
		this.riddles.push(riddle);
		if (this.riddles.length > 3) {
			this.riddles.shift();
		};
	}

	attemptAnswer(guess){
		for (let i = 0; i < this.riddles.length; i++){
			if (guess === this.riddles[i]['answer']) {
				this.riddles.splice(i, 1);
			};
		};
	}
}

module.exports = Sphinx;
