import EmployeeApiClient from "../api/EmployeeApiClient";

const PersoneStore = {
	state: {
		persones: [{
			id: '1',
			profileFileName: 'persone1.jpg',
			profileName: 'Иванов Иван',
			prosonAge: '24',
			prosonCity: 'Москва',
			prosonWork: 'Университет синергия :D'
		}],
		loading: true,
	},
	mutations: {
		updatePosts(state, emploee) {
			state.persones = emploee
		},
		changeLoadingState(state, loading) {
			state.loading = loading
		}
	},
	actions: {
		async loadData({ commit }) {
			const userApi = new EmployeeApiClient();
			const emploee = await userApi.getEmployee();
			commit('updatePosts', emploee);
			commit('changeLoadingState', false);

		},
	},
	getters: {
		getPersones(state) {
			return state.persones;
		},
		filtaredPersonesByName: (state) => (NameFilter) => {
			return state.persones.filter(person => person.profileName.includes(NameFilter));
		},
		filtaredPersonesById: (state) => (Id) => {
			return state.persones.filter(person => person.id == Id);
		}
	}
};
export default PersoneStore;