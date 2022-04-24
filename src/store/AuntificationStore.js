import AutorizationApiClient from "../api/AutorizationApiClient";

const AuntificationStore = {
	state: {
		token: "",
		auth: 0,
		login: "login",
		password: "passw",

	},
	mutations: {
		token(state, payload){
			state.token = payload;
			console.log(state.token);
		},
		changeAuthState(state, loading) {
			state.auth = loading;
		}
	},
	actions: {
		AuntificationLoad({ commit }) {
			commit('changeAuthState', true);
		},
		async authorizeAsync(state, payload){
			const authApiClient = new AutorizationApiClient();
			const authToken = await authApiClient.Auth(payload.login, payload.password);
			if (authToken) {
				this.commit("token",authToken);
				return true;
			}
				return false;
			
		}
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