import axios from "axios"
import UserModel from "../models/UserModel";

export default class UserApiClient {
	constructor() {
		this.#axiosHttpClient = axios.create();
	}
	#axiosHttpClient = null;


	async getUser(token) {
		const headers = {
			"Authorization": token
		}
	
		const httpCloent = axios.create({
			headers
		});
		try {
			const avatarResponce = await httpCloent.get(`${process.env.VUE_APP_API_HOST_LOCAL}/user/`);
			if (avatarResponce != null && avatarResponce.data != null && avatarResponce.status == 200) {
				const userModel = new UserModel(avatarResponce.data);
				return userModel;
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