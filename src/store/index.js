import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    comics: [],
    favorites: [],
  },
  getters: {
    getComics: (state) => state.comics,
  },
  mutations: {
    setComics: (state, comics) => (state.comics = comics),
  },
  actions: {
    fetchComics: async (context) => {
      try {
        const response = await axios.get(
          `http://gateway.marvel.com/v1/public/comics?limit=${64}&offset=${0}&ts=1&apikey=8dadd0e06aec01fef118529cbc321be6&hash=0ef40ff11fc4a4a2dcc9d7606877fc09`
        );
        const comics = response.data.data.results;
        context.commit("setComics", comics);
      } catch (error) {
        console.error("Comic verileri alınırken bir hata oluştu:", error);
      }
    },
  },
  modules: {},
});
