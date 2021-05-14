class TrickOrTreater {
	constructor(costume, bag) {
		this.dressedUpAs = costume.style;
		this.bag = bag;
		this.hasCandy = false;
	}

	putCandyInBag(candy){
		this.bag.fill(candy);
		this.hasCandy = true;
	}
}

module.exports = TrickOrTreater;
