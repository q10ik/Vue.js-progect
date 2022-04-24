import axios from "axios";
import EmploeeModel from "../models/EmploeeModel";


export default class EmployeeApiClient {


	async getEmployee(token) {
		const headers = {
			"Authorization": token
		}
	
		const httpCloent = axios.create({
			headers
		});

		try {
			const employeeList = await httpCloent.get(`${process.env.VUE_APP_API_HOST_LOCAL}/employee`);

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
	async getEmployeeProfile(userID, token) {
		const headers = {
			"Authorization": token
		}
	
		const httpCloent = axios.create({
			headers
		});
		try {
			const employer = await httpCloent.get(`${process.env.VUE_APP_API_HOST_LOCAL}/employee/${userID}`);

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