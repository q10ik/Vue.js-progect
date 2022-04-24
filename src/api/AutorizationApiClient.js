import axios from "axios";
import AuthModel from "../models/AuthModel";


export default class AutorizationApiClient {
/**
 * 
 * @param {*} login 
 * @param {*} password 
 * @returns {Promise<obgect>} user object
 */

	async Auth(login, password) {
		const headers = {
			"Content-Type": "application/json"
		};
		const httpClient = axios.create({
			baseURL: process.env.VUE_APP_API_HOST_LOCAL,
			// timeout: 1000,
			headers
		});

		const authModel = new AuthModel({login,password});

		try {
			const responce = await httpClient.post(`${process.env.VUE_APP_API_HOST_LOCAL}/auth/${login}/${password}`, authModel);

			if (responce != null && responce.data != null && responce.status == 200) {
				return responce.data;
			} else {
				console.warn('unexpected auth responce')
				return null;
			}
		}
		catch (e) {
			console.error(e);
			alert('Проверьте подключенние к api');
		}
	}
}