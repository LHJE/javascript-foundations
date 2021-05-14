class Direwolf {
	constructor(name, home = 'Beyond the Wall', size = 'Massive') {
		this.name = name;
		this.home = home;
		this.size = size;
		this.starksToProtect = [];
		this.huntsWhiteWalkers = true;
	}

	protect(stark){
		if(this.home === stark.location && this.starksToProtect.length < 2){
			this.starksToProtect.push(stark);
			stark.safe = true;
			this.huntsWhiteWalkers = false;
		};
	}

	leave(stark){
		stark.safe = false;
		for (let i = 0; i < this.starksToProtect.length; i++){
			if (stark === this.starksToProtect[i]) {
				this.starksToProtect.splice(i, 1);
			};
		};
	}
}

module.exports = Direwolf;
