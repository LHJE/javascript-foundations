class TrickOrTreater {
	constructor(costume, bag) {
		this.dressedUpAs = costume.style;
		this.bag = bag;
		this.hasCandy = false;
		this.countCandies = 0;
	}

	putCandyInBag(candy){
		this.bag.fill(candy);
		this.hasCandy = true;
		this.countCandies++;
	}

}

module.exports = TrickOrTreater;
