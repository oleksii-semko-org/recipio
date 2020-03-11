import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import dataFetcher from '../../../services/dataFetcher/index'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    categories: {
    },
    meals: {
    },
    isError: false,
  },
  plugins: [new VuexPersistence().plugin],
  mutations: {
    updateCategories(state, categories) {
      state.categories = categories;
    },
    setStateError(state) {
      state.isError = true
    }
  },
  actions: {
    storeCategories(context) {
      const vuexLocalData = typeof(Storage) !== "undefined" ? window.localStorage.getItem("vuex") : null;
      let localData = typeof vuexLocalData === 'string' ? JSON.parse(vuexLocalData) : null;
      const categories = localData === null ? localData : localData.categories;      

      if (vuexLocalData !== null && categories !== null) {
        context.commit('updateCategories', categories);
      } else {
        const fetchCategories = dataFetcher.getMealCategories();

        fetchCategories.then(response => {
          if (response.status && response.status === 200 && response.data.categories) {
            context.commit('updateCategories', response.data.categories);
          } else {
            console.log('response status ', response.status);
          }
        }).catch(errors => {
          console.log('errors', errors);
          context.commit('setStateError', errors);
        });
      }
    }
  },
  getters: {
    categoriesCount: state => {
      return state.categoies.length;
    }
  }
});

export default store;
