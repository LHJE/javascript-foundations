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

	admit(skater){
		if (this.occupants.length >= 3) {
			return 'Sorry, we are at max capacity. Thank you for understanding.';
		} else {
			if (this.isPrivate) {
				if (this.cost > skater.money) {
					return `Sorry, you don't have enough money.`;
				} else {
					skater.money -= this.cost;
					this.occupants.push(skater);
					return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`;
				};
			} else {
				this.occupants.push(skater);
				return `Welcome to the free ${this.name} Skatepark!`;
			};
		};
	}
}

module.exports = SkatePark;
