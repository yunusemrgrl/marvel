<template>
  <img
    width="30"
    height="30"
    src="https://img.icons8.com/emoji/48/white-heart.png"
    alt="white-heart"
    @click="addToFavorite"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    v-if="!isFavorite && !hover"
  />
  <img
    width="30"
    height="30"
    src="https://img.icons8.com/emoji/48/red-heart.png"
    alt="red-heart"
    @click="addToFavorite"
    @mouseleave="hover = false"
    v-if="isFavorite || hover"
  />
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AddFavorite",
  props: {
    id: Number,
  },
  computed: {
    ...mapGetters(["checkIfFavorite"]),
    isFavorite() {
      return this.checkIfFavorite(this.id);
    },
  },
  data() {
    return {
      hover: false,
    };
  },
  methods: {
    ...mapActions(["addToFavorites", "getFavorites"]),
    addToFavorite() {
      this.addToFavorites(this.id);
      this.getFavorites();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
img {
  cursor: pointer;
  position: absolute;
  z-index: 1;
  right: 20px;
  top: 5px;
}
</style>
