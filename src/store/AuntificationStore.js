

const AuntificationStore = {
	state: {

		auth: 0,
		login: "123",
		password: "123",

	},
	mutations: {

		changeAuthState(state, loading) {
			state.auth = loading;
		}
	},
	actions: {
		AuntificationLoad({ commit }) {
			commit('changeAuthState', true);
		},
	},
	getters: {
		TryAuntification: (state) => (log, pass) => {

			if (log == state.login && pass == state.password) {
				return 1;
			} else {
				return 0;
			}
		},
		AuntificationState(state) {

			return state.auth;
		}
	}
};
export default AuntificationStore;