import EmployeeApiClient from "../api/EmployeeApiClient";
import AuntificationStore from "../store/AuntificationStore";
const PersoneStore = {
	state: {
		persones: [{
			id: '1',
			profileFileName: 'dafault.jpg',
			profileName: '',
			prosonAge: '',
			prosonCity: '',
			prosonWork: ''
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
			const emploee = await userApi.getEmployee(AuntificationStore.state.token);
			commit('updatePosts', emploee);
			commit('changeLoadingState', false);

		},
	},
	getters: {
		getPersones(state) {
			return state.persones;
		},
		filtaredPersonesByName: (state) => (NameFilter) => {
			return state.persones.filter(person => person.profileName.toUpperCase().includes(NameFilter));
		},
		filtaredPersonesById: (state) => (Id) => {
			return state.persones.filter(person => person.id == Id);
		}
	}
};
export default PersoneStore;