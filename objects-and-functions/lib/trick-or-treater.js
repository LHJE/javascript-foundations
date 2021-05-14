class TrickOrTreater {
	constructor(costume, bag) {
		this.dressedUpAs = costume.style;
		this.bag = bag;
		this.hasCandy = false;
	}

	putCandyInBag(candy){
		this.bag.fill(candy);
	}
}

module.exports = TrickOrTreater;
