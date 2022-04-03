import axios from "axios";

export default class UserApiClient {
	constructor() {
		this.#axiosHttpClient = axios.create();
	}
	#axiosHttpClient = null;


	async getAvatarImage() {
		try {
			const avatarResponce = await this.#axiosHttpClient.get('http://localhost:5000/api/user/myprofile/img');
			if (avatarResponce != null && avatarResponce.data != null) {
				return avatarResponce.data;
			} else {
				return 'myprofile.jpg';
			}
		}
		catch (e) {
			console.error(e);
			return 'myprofile.jpg';
		}
	}

	async getAvatarName() {
		try {
			const avatarResponce = await this.#axiosHttpClient.get('http://localhost:5000/api/user/myprofile/name');
			if (avatarResponce != null && avatarResponce.data != null) {
				return avatarResponce.data;
			} else {
				return 'noapi Кобозев Игорь';
			}
		}
		catch (e) {
			console.error(e);
			return 'noapi Кобозев Игорь';
		}
	}

	async getPersones() {
		// try {
		// const avatarResponce = await this.#axiosHttpClient.get('http://localhost:5000/api/user/persones');
		// if (avatarResponce != null && avatarResponce.data != null) {
		const persones = new Promise(() => {
			setTimeout(() => {
				return [
					{
						id: '1',
						ProfileName: 'Иванов Иван',
						ProfileFileName: 'myprofile.jpg',
						prosonAge: '24',
						prosonCity: 'Москва',
						prosonWork: 'Университет синергия :D'
					},
					{
						id: '2',
						ProfileName: 'Гирасимов Семен',
						ProfileFileName: 'myprofile.jpg',
						prosonAge: '24',
						prosonCity: 'Москва',
						prosonWork: 'Университет синергия :D'
					},
					{
						id: '3',
						ProfileName: 'Климов Антон',
						ProfileFileName: 'myprofile.jpg',
						prosonAge: '24',
						prosonCity: 'Москва',
						prosonWork: 'Университет синергия :D'
					},
					{
						id: '4',
						ProfileName: 'Семенов Дмитрий',
						ProfileFileName: 'myprofile.jpg',
						prosonAge: '24',
						prosonCity: 'Москва',
						prosonWork: 'Университет синергия :D'
					}
				];

			}, 500);
		});
		console.log(persones);
		return persones;

		// 	} else {
		// 		return persones;
		// 	}
		// }
		// catch (e) {
		// 	console.error(e);
		// 	return persones;
		// }
	}
}