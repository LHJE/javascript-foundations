class Sphinx {
	constructor() {
		this.riddles = [];
		this.heroesEaten = 0;
	}

	collectRiddle(riddle){
		this.riddles.push(riddle);
		if (this.riddles.length > 3) {
			this.riddles.shift();
		};
	}

	attemptAnswer(guess){
		var startingLength = this.riddles.length
		for (let i = 0; i < this.riddles.length; i++){
			if (guess === this.riddles[i]['answer']) {
				this.riddles.splice(i, 1);
				return 'That wasn\'t that hard, I bet you don\'t get the next one';
			};
		};
		if (startingLength === this.riddles.length) {
			this.heroesEaten++;
		};
	}
}

module.exports = Sphinx;
