import axios from "axios";
import EmploeeModel from "../models/EmploeeModel";


export default class EmployeeApiClient {
	constructor() {
		this.#axiosHttpClient = axios.create();
	}
	#axiosHttpClient = null;


	async getEmployee() {
		try {
			const employeeList = await this.#axiosHttpClient.get(`${process.env.VUE_APP_API_HOST}/api/employee`);

			if (employeeList != null && employeeList.data != null && employeeList.status == 200) {
				let emploeeArray = [];
				for (let item of employeeList.data) {
					let emploeeModel = new EmploeeModel(item);
					emploeeArray.push(emploeeModel);
				}
				return emploeeArray;
			} else {
				alert('API вернула что-то не то');
			}
		}
		catch (e) {
			console.error(e);
			alert('Проверьте подключенние к api');
		}
	}
	async getEmployeeProfile(userID) {
		try {
			const employer = await this.#axiosHttpClient.get(`${process.env.VUE_APP_API_HOST}/api/employee/${userID}`);

			if (employer != null && employer.data != null && employer.status == 200) {
				const emploeeModel = new EmploeeModel(employer.data);
				return emploeeModel;
			} else {
				alert('API вернула что-то не то');
			}
		}
		catch (e) {
			console.error(e);
			alert('Проверьте подключенние к api');
		}
	}
}