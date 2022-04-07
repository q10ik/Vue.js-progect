export default class UserModel {
	constructor(data) {
		if (data) {

			if (data.id) {
				this.id = data.id;
			}
			this.avatar = data.avatar;
			this.login = data.login;
			this.firstName = data.firstName;
			this.lasName = data.lasName;
			this.age = data.age;
			this.city = data.city;
			this.work = data.work;
		}
	}
	id = 0;
	avatar = null;
	login = null;
	firstName = null;
	lasName = null;
	age = null;
	city = null;
	work = null;
}