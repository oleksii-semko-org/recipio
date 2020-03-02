import axios from 'axios';
import {
  API_SEARCH_ENDPOINT,
  API_TO_PARAM,
  API_CUISINE_PARAM,
  CUISINE_CHINA,
  CUISINE_ITALY,
  CUISINE_KOSHER
} from '../constants';

store = new Vuex.Store({
  state: {
    recipes: {
      cuisines: {}
    },
    isError: false,
  },
  mutations: {
    updateCuisines(state, payload) {
      state.recipes.cuisines = payload
    },
    setStateError() {
      state.isError = true
    }
  },
  actions: {
    async fetchCuisinesRecipe(context) {
      const chinaCuisineEndpointParam = `${API_CUISINE_PARAM}=${CUISINE_CHINA}`;
      const italyCuisineEndpointParam = `${API_CUISINE_PARAM}=${CUISINE_ITALY}`;
      const kosherCuisineEndpointParam = `${API_CUISINE_PARAM}=${CUISINE_KOSHER}`;

      const requestChinaCuisine = await axios.get(`${API_SEARCH_ENDPOINT}&${chinaCuisineEndpointParam}&${API_TO_PARAM}=1`);
      const requestItalCuisine = await axios.get(`${API_SEARCH_ENDPOINT}&${italyCuisineEndpointParam}&${API_TO_PARAM}=1`);
      const requestKosherCuisine = await axios.get(`${API_SEARCH_ENDPOINT}&${kosherCuisineEndpointParam}&${API_TO_PARAM}=1`);

      axios.all([requestChinaCuisine, requestItalCuisine, requestKosherCuisine]).then(axios.spread((...responses) => {
        const responseChinaCuisine = responses[0];
        const responseItalCuisine = responses[1];
        const responesKosherCuisine = responses[2];

        context.commit('updateCuisines', response.data.message); // check here

      })).catch(errors => {
        context.commit('setStateError');
      })


    }
  }
});

export default store;
