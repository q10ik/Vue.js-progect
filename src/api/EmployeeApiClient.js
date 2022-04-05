import axios from "axios";

export default class EmployeeApiClient {
	constructor() {
		this.#axiosHttpClient = axios.create();
	}
	#axiosHttpClient = null;


	async getEmployee() {
		try {
			const employeeList = await this.#axiosHttpClient.get(`${process.env.VUE_APP_API_HOST}/api/employee`);

			if (employeeList != null && employeeList.data != null) {
				return employeeList.data;
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