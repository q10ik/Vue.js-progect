export default class AuthModel {
	constructor(auth) {
		if (auth) {

			this.login = auth.login;
			this.password = auth.password;

		}
	}
	login = '-';
	password = '-';

}