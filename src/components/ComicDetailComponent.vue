<template>
  <div class="detail">
    <div class="content">
      <div class="fav">
        <AddFavorite :id="comic.id" />
      </div>

      <template v-if="Object.keys(comic).length">
        <h1>{{ comic.title }}</h1>

        <img
          v-if="comic.thumbnail"
          :src="comic.thumbnail.path + '.' + comic.thumbnail.extension"
          :alt="comic.title"
        />
        <p v-html="comic.description"></p>
      </template>
      <template v-else>
        <div class="loading">Loading...</div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddFavorite from "@/components/AddFavorite.vue";

export default {
  name: "ComicDetails",
  components: {
    AddFavorite,
  },
  computed: {
    ...mapGetters({
      comic: "getComic",
    }),
  },
  created() {
    this.fetchComic(this.$route.params.id);
  },
  methods: {
    ...mapActions(["fetchComic"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.detail {
  h1 {
    margin-bottom: 20px;
  }

  img {
    max-height: 400px;
    aspect-ratio: 16/9;
    margin-bottom: 20px;
  }

  p {
    max-width: 80%;
  }

  .loading {
    color: $light-text;
    font-size: 26px;
    font-weight: bold;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin-top: 80px;
    position: relative;
  }

  .fav {
    position: absolute;
    right: 100px;
    top: -10px;
  }
}
</style>
