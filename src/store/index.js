import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    comics: [],
    comic: {},
    favoriteComics: [],
  },
  getters: {
    getComics: (state) => state.comics,
    getComic: (state) => state.comic,
    getFavoriteComics: (state) => state.favoriteComics,
    checkIfFavorite: (state) => (comicId) => {
      return state.favoriteComics.includes(comicId);
    },
  },
  mutations: {
    setComics: (state, comics) => (state.comics = comics),
    setComic: (state, comic) => (state.comic = comic),
    addToFavorites(state, comicId) {
      if (!state.favoriteComics.includes(comicId)) {
        state.favoriteComics.push(comicId);
      }
    },
    setFavoriteComics(state, favoriteComics) {
      state.favoriteComics = favoriteComics;
    },
  },
  actions: {
    fetchComics: async ({ commit }) => {
      try {
        const response = await axios.get(
          `${
            process.env.VUE_APP_API_BASE_URL
          }comics?limit=${64}&offset=${0}&ts=1&apikey=${
            process.env.VUE_APP_API_KEY
          }&hash=${process.env.VUE_APP_HASH}`
        );
        const comics = response.data.data.results;
        commit("setComics", comics);
      } catch (error) {
        console.error("Comic verileri alınırken bir hata oluştu:", error);
      }
    },
    fetchComic: async ({ commit }, id) => {
      try {
        const response = await axios.get(
          `${process.env.VUE_APP_API_BASE_URL}comics/${id}?ts=1&apikey=${process.env.VUE_APP_API_KEY}&hash=${process.env.VUE_APP_HASH}`
        );
        const comic = response.data.data.results[0];
        commit("setComic", comic);
      } catch (error) {
        console.error("Comic verisi alınırken bir hata oluştu:", error);
      }
    },
    addToFavorites({ commit }, comicId) {
      const favoriteComics =
        JSON.parse(localStorage.getItem("favoriteComics")) || [];

      if (!favoriteComics.includes(comicId)) {
        favoriteComics.push(comicId);
        localStorage.setItem("favoriteComics", JSON.stringify(favoriteComics));
      } else {
        favoriteComics.splice(favoriteComics.indexOf(comicId), 1);
        localStorage.setItem("favoriteComics", JSON.stringify(favoriteComics));
      }

      commit("addToFavorites", comicId);
    },
    getFavorites({ commit }) {
      const favoriteComics =
        JSON.parse(localStorage.getItem("favoriteComics")) || [];
      commit("setFavoriteComics", favoriteComics);
    },
  },
  modules: {},
});
