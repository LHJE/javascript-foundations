class GolfCourse {
	constructor(name, difficulty, openings, features) {
		this.name = name;
		this.difficulty = difficulty;
		this.openings = openings;
		this.features = features;
		this.currentlyPlaying = [];
	}

	checkInGroup(group){
		for (var i = 0; i < group.length; i++) {
			this.currentlyPlaying.unshift(group[i].name);
		}
		this.currentlyPlaying
		this.openings -= group.length;
	}
}
module.exports = GolfCourse;
