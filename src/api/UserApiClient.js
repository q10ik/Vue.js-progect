import axios from "axios";

export default class UserApiClient {
	constructor() {
		this.#axiosHttpClient = axios.create();
	}
	#axiosHttpClient = null;


	async getUser() {
		try {
			const avatarResponce = await this.#axiosHttpClient.get(`${process.env.VUE_APP_API_HOST}/api/user/`);
			if (avatarResponce != null && avatarResponce.data != null) {
				return avatarResponce.data;
			} else {
				alert('API вернула что-то не то');
			}
		}
		catch (e) {
			console.error(e);
			alert('Проверьте подключенние к API');
		}
	}



}