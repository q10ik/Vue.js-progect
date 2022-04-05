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
		count: 0,
	},
	mutations: {
		increment(state) {
			state.count++
		},
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
	}
};
export default PersoneStore;