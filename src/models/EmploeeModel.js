export default class EmploeeModel {
	constructor(data) {
		if (data) {
			if (data.id) {
				this.id = data.id;
			}
			this.profileFileName = data.profileFileName;
			this.profileName = data.profileName;
			this.prosonAge = data.prosonAge;
			this.prosonCity = data.prosonCity;
			this.prosonWork = data.prosonWork;
		}
	}
	id = 0;
	profileFileName = null;
	profileName = null;
	prosonAge = null;
	prosonCity = null;
	work = null;
}