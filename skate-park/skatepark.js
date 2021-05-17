class SkatePark {
	constructor(data) {
		this.name = data['name'];
		this.yearFounded = data['year'];
		this.style = data['type'];
		this.features = data['features'];
		this.occupants = [];
		if (typeof(data['isPrivate']) === 'undefined') {
			this.isPrivate = false;
			this.cost = 0;
		} else {
			this.isPrivate = data['isPrivate'];
			this.cost = data['price'];
		}
	}
}

module.exports = SkatePark;
